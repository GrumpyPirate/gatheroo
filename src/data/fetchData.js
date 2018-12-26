const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');
const path = require('path');
const merge = require('lodash/merge');

const getJson = require('./helpers/getJson');
const getZonesFromItemId = require('./helpers/getZonesFromItemId');
const getStarsFromItemId = require('./helpers/getStarsFromItemId');
const getIsHiddenFromItemId = require('./helpers/getIsHiddenFromItemId');
const getGatheringTypeNameFromItemId = require('./helpers/getGatheringTypeNameFromItemId');

const db = lowdb(new FileSync(path.resolve(__dirname, 'db.json')));

// Init lowdb db
db.defaults({
  Item: [],
  GatheringType: [],
  GatheringItem: [],
  GatheringItemLevelConvertTable: [],
  GatheringPoint: [],
  GatheringPointBase: [],
  GatheringSubCategory: [],
  TerritoryType: [],
  PlaceName: []
})
.write();

Promise.all([
  getJson('Item'),
  getJson('GatheringType'),
  getJson('GatheringItem'),
  getJson('GatheringItemLevelConvertTable'),
  getJson('GatheringPoint'),
  getJson('GatheringPointBase'),
  getJson('GatheringSubCategory'),
  getJson('TerritoryType'),
  getJson('PlaceName'),
])
  .then(jsons => {
    jsons.forEach(entityJson => {
      const { name, json } = entityJson;
      const slicedData = json.slice(2);

      // Write to the file DB
      try {
        db.set(name, slicedData).write();
      } catch (err) {
        throw err;
      }

      // Write out the individual json
      try {
        fs.writeFile(
          path.resolve(__dirname, `${name}.json`),
          JSON.stringify(slicedData, null, 2),
          'utf8',
          () => Promise.resolve()
        );
      } catch (err) {
        throw err;
      }
    });
  })
  .then(() => {
    // Consolidate all separate JSONs into one generic object, with all relevant data

    // Query the file db
    // {
    //   "id": "5",
    //   "description": "A tiny crystalline manifestation of aetheric earth energy.",
    //   "name": "Earth Shard",
    //   "icon": "20006",
    //   "itemLevel": "1",
    //   "rarity": "1",
    //   "filterGroup": "11",
    //   "additionalData": "0",
    //   "itemUICategory": "59",
    //   "itemSearchCategory": "58",
    //   "equipSlotCategory": "0",
    //   "isUnique": "False",
    //   "isUntradable": "False",
    //   "isIndisposable": "False",
    //   "isEquippable": "False",
    //   "priceMid": "9",
    //   "priceLow": "0",
    //   "canBeHq": "False",
    //   "itemAction": "0",
    //   "isCollectable": "False",
    //   "aetherialReduce": "0",
    //   "classJobCategory": "0",
    //   "itemSeries": "0",
    //   "materializeType": "0"
    // }
    const items = db.get('Item').value();

    const consolidatedItems = items
      // Filter out items that have don't have GatheringItem entries
      .filter(item => !!db.get('GatheringItem').value().find(gatheringItem => gatheringItem.item === item.id))
      .map((item, index) => {
        /**
         * Fields that must be sourced manually:
         * - Slot
         * - timeWindowStartHour
         * - timeWindowStartMinute
         * - minPerception
         */

        const schema = {
          // id: null, // 5121
          // nameEN: null, // Darksteel Ore
          // descriptionEN: null, // A decent-sized piece of rock containing the metal darksteel.
          // zones: null, // The Sea of Clouds
          // itemLevel: null, // 70
          // stars: null, // 3 (i.e. ★★★)
          // slot: null, // 6
          // isHidden: null, // true
          // timeWindowStartHour: null, // 0-23
          // timeWindowStartMinute: null, // 0-59
          // minPerception: null, // 371
          // gatheringType: null, // Mining
          // gatheringPointPosX: null, // 33
          // gatheringPointPosY: null, // 24
        };

        const zones = getZonesFromItemId(db, item.id);
        const firstZone = !!zones.length ? zones[0].place : null;
        const stars = getStarsFromItemId(db, item.id);
        const isHidden = getIsHiddenFromItemId(db, item.id);
        const gatheringTypeName = getGatheringTypeNameFromItemId(db, item.id, item.name);

        return {
          ...schema,
          id: index,
          itemId: parseInt(item.id, 10),
          nameEN: item.name,
          descriptionEN: item.description,
          zone: firstZone,
          itemLevel: parseInt(item.itemLevel, 10),
          stars,
          isHidden,
          gatheringTypeName,
          // gatheringPointPosX,
          // gatheringPointPosY
        };
      });

    // console.log('consolidatedItems:', consolidatedItems);

    // End result: merge consolidated items with what's already stored.
    // Note that the resulting file should be committed.
    fs.readFile('src/data/master-json/gathering-items__MASTER.json', 'utf8', (err, prevItemsData) => {
      if (err) throw err;

      const parsedPrevItemsData = JSON.parse(prevItemsData);

      // Backup the old items, first
      fs.writeFile(`src/data/master-json/gathering-items__BACKUP--${Date.now()}.json`, prevItemsData, 'utf8', err => {
        if (err) throw err;

        // Initialise a new items array
        let newItemsData = [...parsedPrevItemsData.map(item => ({ ...item }))];
        // For every item in consolidated items
        consolidatedItems.forEach(item => {
          // Find that item in the previous items data
          const matchedItem = newItemsData.find(prevItem => prevItem.id === item.id);

          // Did it exist? I.e. do we have some data for that item from a previous data dump?
          if (matchedItem) {
            // Merge the new item's data with that of the old item
            const mergedItem = merge(matchedItem, item);
            const index = newItemsData.findIndex(newItem => newItem.id === item.id);
            newItemsData[index] = { ...mergedItem };
          } else {
            // Add it to the new items array
            newItemsData = newItemsData.concat(item);
          }
        });

        newItemsData.sort((item1, item2) => item1.id - item2.id);

        fs.writeFile('src/data/master-json/gathering-items__MASTER.json', JSON.stringify(newItemsData), 'utf8', err => {
          if (err) throw err;
        });
      });
    });
  })
  .catch(console.error);
