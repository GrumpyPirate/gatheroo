const getGatheringTypeNameFromItemId = (db, itemId, itemName) => {
  // Get the gatheringItem for this itemId
  const gatheringItem = db.get('GatheringItem')
    .value()
    .find(gatheringItem => gatheringItem.item === itemId);

  if (gatheringItem) {
    // Get all instances of GatheringPointBase that contain this GatheringItem
    const gatheringPointBase = db.get('GatheringPointBase')
      .value()
      .find(gatheringPointBase => (
        gatheringPointBase.item0 === gatheringItem.id
        || gatheringPointBase.item1 === gatheringItem.id
        || gatheringPointBase.item2 === gatheringItem.id
        || gatheringPointBase.item3 === gatheringItem.id
        || gatheringPointBase.item4 === gatheringItem.id
        || gatheringPointBase.item5 === gatheringItem.id
        || gatheringPointBase.item6 === gatheringItem.id
        || gatheringPointBase.item7 === gatheringItem.id
      ));

    if (!gatheringPointBase) return null;

    const gatheringType = db.get('GatheringType')
      .find({ id: gatheringPointBase.gatheringType })
      .value();

    return gatheringType ? gatheringType.name : null;
  }

  return null;
};

module.exports = getGatheringTypeNameFromItemId;
