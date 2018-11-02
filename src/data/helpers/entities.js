const path = require('path');

module.exports = {
  Item: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/Item.csv',
      dev: path.resolve(__dirname, 'testData/Item.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'singular',
        'unknown1',
        'plural',
        'unknown2',
        'startsWithVowel',
        'unknown3',
        'unknown4',
        'unknown5',
        'description',
        'name',
        'icon',
        'itemLevel',
        'rarity',
        'filterGroup',
        'additionalData',
        'itemUICategory',
        'itemSearchCategory',
        'equipSlotCategory',
        'unknown6',
        'stackSize',
        'isUnique',
        'isUntradable',
        'isIndisposable',
        'isEquippable',
        'priceMid',
        'priceLow',
        'canBeHq',
        'isDyeable',
        'isCrestWorthy',
        'itemAction',
        'unknown7',
        'cooldownSeconds',
        'classJobRepair',
        'itemRepair',
        'itemGlamour',
        'salvage',
        'isCollectable',
        'aetherialReduce',
        'levelEquip',
        'unknown8',
        'equipRestriction',
        'classJobCategory',
        'grandCompany',
        'itemSeries',
        'baseParamModifier',
        'modelMain',
        'modelSub',
        'classJobUse',
        'unknown9',
        'damagePhys',
        'damageMag',
        'delayMs',
        'unknown10',
        'blockRate',
        'block',
        'defensePhys',
        'defenseMag',
        'baseParam0',
        'baseParamValue0',
        'baseParam1',
        'baseParamValue1',
        'baseParam2',
        'baseParamValue2',
        'baseParam3',
        'baseParamValue3',
        'baseParam4',
        'baseParamValue4',
        'baseParam5',
        'baseParamValue5',
        'itemSpecialBonus',
        'itemSpecialBonusParam',
        'baseParamSpecial0',
        'baseParamValueSpecial0',
        'baseParamSpecial1',
        'baseParamValueSpecial1',
        'baseParamSpecial2',
        'baseParamValueSpecial2',
        'baseParamSpecial3',
        'baseParamValueSpecial3',
        'baseParamSpecial4',
        'baseParamValueSpecial4',
        'baseParamSpecial5',
        'baseParamValueSpecial5',
        'materializeType',
        'materiaSlotCount',
        'isAdvancedMeldingPermitted',
        'isPvP',
        'isGlamourous'
      ],
      includeColumns: /(id|description|name|icon|itemLevel|rarity|filterGroup|additionalData|itemUICategory|itemSearchCategory|equipSlotCategory|isUnique|isUntradable|isIndisposable|isEquippable|priceMid|priceLow|canBeHq|itemAction|isCollectable|aetherialReduce|classJobCategory|itemSeries|materializeType)/
    }
  },
  GatheringType: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/GatheringType.csv',
      dev: path.resolve(__dirname, 'testData/GatheringType.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'name',
        'iconMain',
        'iconOff'
      ]
    }
  },
  GatheringItem: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/GatheringItem.csv',
      dev: path.resolve(__dirname, 'testData/GatheringItem.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'item',
        'gatheringItemLevel',
        'isHidden'
      ]
    }
  },
  GatheringItemLevelConvertTable: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/GatheringItemLevelConvertTable.csv',
      dev: path.resolve(__dirname, 'testData/GatheringItemLevelConvertTable.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'gatheringItemLevel',
        'stars'
      ]
    }
  },
  GatheringPoint: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/GatheringPoint.csv',
      dev: path.resolve(__dirname, 'testData/GatheringPoint.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'unknown1',
        'gatheringPointBase',
        'unknown2',
        'gatheringPointBonus0',
        'gatheringPointBonus1',
        'territoryType',
        'placeName',
        'gatheringSubCategory'
      ]
    }
  },
  GatheringPointBase: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/GatheringPointBase.csv',
      dev: path.resolve(__dirname, 'testData/GatheringPointBase.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'gatheringType',
        'gatheringLevel',
        'item0',
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
        'item7',
        'isLimited'
      ]
    }
  },
  GatheringSubCategory: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/GatheringSubCategory.csv',
      dev: path.resolve(__dirname, 'testData/GatheringSubCategory.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'unknown1',
        'unknown2',
        'unknown3',
        'unknown4',
        'item',
        'folkloreBook'
      ]
    }
  },
  TerritoryType: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/TerritoryType.csv',
      dev: path.resolve(__dirname, 'testData/TerritoryType.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'name',
        'bg',
        'unknown1',
        'placeNameRegion',
        'placeNameZone',
        'placeName',
        'map',
        'unknown2',
        'unknown3',
        'territoryIntendedUse',
        'unknown4',
        'unknown5',
        'weatherRate',
        'unknown6',
        'unknown7',
        'unknown8',
        'unknown9',
        'unknown10',
        'unknown11',
        'unknown12',
        'unknown13',
        'unknown14',
        'arrayEventHandler',
        'unknown15',
        'aetheryte',
        'unknown16',
        'unknown17',
        'unknown18',
        'unknown19',
        'unknown20',
        'unknown21',
        'unknown22',
        'unknown23'
      ],
      includeColumns: /(id|name|bg|placeNameRegion|placeNameZone|placeName|map|territoryIntendedUse|weatherRate|arrayEventHandler|aetheryte)/
    }
  },
  PlaceName: {
    urls: {
      prod: 'https://raw.githubusercontent.com/viion/ffxiv-datamining/master/csv/PlaceName.csv',
      dev: path.resolve(__dirname, 'testData/PlaceName.csv')
    },
    config: {
      noheader: false,
      headers: [
        'id',
        'name',
        'unknown1',
        'nameNoArticle',
        'unknown2',
        'unknown3',
        'unknown4',
        'unknown5',
        'unknown6',
        'unknown7',

      ],
      includeColumns: /(id|name|nameNoArticle)/
    }
  }
};
