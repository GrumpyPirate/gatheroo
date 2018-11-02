/**
 * Gets the Star rating of this Item, by its id.
 *
 * @param  {Object} db     - Instance of lowdb
 * @param  {String} itemId - Item ID
 *
 * @return {Number}        - Star rating of this item. Defaults to 0.
 */
const getStarsFromItemId = (db, itemId) => {
  // Get the gatheringItem for this itemId
  const gatheringItem = db.get('GatheringItem')
    .value()
    .find(gatheringItem => gatheringItem.item === itemId);

  if (gatheringItem) {
    // Get the Stars for this GatheringItem's GatheringItemLevel
    const gatheringItemLevel = db.get('GatheringItemLevelConvertTable')
      .find(gatheringItemLevelConvertTable => gatheringItemLevelConvertTable.id === gatheringItem.gatheringItemLevel)
      .value();

    return gatheringItemLevel ? parseInt(gatheringItemLevel.stars, 10) : 0;
  }

  return 0;
};

module.exports = getStarsFromItemId;
