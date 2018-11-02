// A bunch of item details, particularly
// https://github.com/viion/ffxiv-datamining/blob/master/csv/Item.csv

// Map - GatheringType to IconOn, IconOff
// https://github.com/viion/ffxiv-datamining/blob/master/csv/GatheringType.csv

// Map - Item to GatheringItemLevel, isHidden
// https://github.com/viion/ffxiv-datamining/blob/master/csv/GatheringItem.csv

// Map - GatheringItemLevel to Stars
// https://github.com/viion/ffxiv-datamining/blob/master/csv/GatheringItemLevelConvertTable.csv

// Map - GatheringPointBase to TerritoryType, PlaceName, and GatheringSubCategory
// https://github.com/viion/ffxiv-datamining/blob/master/csv/GatheringPoint.csv

// Map - GatheringType (Mining/Botany/Fishing) to GatheringLevel (25), Item, Slot, and isLimited
// https://github.com/viion/ffxiv-datamining/blob/master/csv/GatheringPointBase.csv

// Which items are gated behind Folklore (Legendary Nodes)
// https://github.com/viion/ffxiv-datamining/blob/master/csv/GatheringSubCategory.csv

import unspoiledNodes from './unspoiledNodes';
// import ephemeralNodes from './ephemeralNodes';
// import legendaryNodes from './legendaryNodes';

const nodes = [
  ...unspoiledNodes,
  // ...ephemeralNodes,
  // ...legendaryNodes,
];

export default nodes;
