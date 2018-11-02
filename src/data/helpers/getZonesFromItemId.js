const getZonesFromItemId = (db, itemId) => {
  // Get the gatheringItem for this itemId
  const gatheringItem = db.get('GatheringItem')
    .value()
    .find(gatheringItem => gatheringItem.item === itemId);

  if (gatheringItem) {
    // Get all instances of GatheringPointBase that contain this GatheringItem
    const gatheringPointBases = db.get('GatheringPointBase')
      .value()
      .filter(gatheringPointBase => (
        gatheringPointBase.item0 === gatheringItem.id
        || gatheringPointBase.item1 === gatheringItem.id
        || gatheringPointBase.item2 === gatheringItem.id
        || gatheringPointBase.item3 === gatheringItem.id
        || gatheringPointBase.item4 === gatheringItem.id
        || gatheringPointBase.item5 === gatheringItem.id
        || gatheringPointBase.item6 === gatheringItem.id
        || gatheringPointBase.item7 === gatheringItem.id
      ));

    // Get the GatheringPoints for each GatheringPointBase
    const gatheringPoints = gatheringPointBases.reduce(
      (gatheringPoints, gatheringPointBase) => gatheringPoints.concat(
        db.get('GatheringPoint')
          .value()
          .filter(gatheringPoint => {
            return Boolean(
              gatheringPoint.gatheringPointBase === gatheringPointBase.id
              && gatheringPoint.territoryType !== '1'
            );
          })
      ),
      []
    );

    // Get the TerritoryTypes for each GatheringPoint
    const territoryTypes = gatheringPoints.reduce(
      (territoryTypes, gatheringPoint) => territoryTypes.concat(
        db.get('TerritoryType')
          .value()
          .filter(territoryType => territoryType.id === gatheringPoint.territoryType)
      ),
      []
    );

    // Get the PlaceNames (region, zone, place) for each TerritoryType
    const zones = territoryTypes.map(territoryType => {
      const { placeNameRegion, placeNameZone, placeName } = territoryType;

      const { name: region = null } = db.get('PlaceName')
        .find({ id: placeNameRegion })
        .value();
      const { name: zone = null } = db.get('PlaceName')
        .find({ id: placeNameZone })
        .value();
      const { name: place = null } = db.get('PlaceName')
        .find({ id: placeName })
        .value();

      return {
        region,
        zone,
        place
      };
    });

    return zones;
  }

  return [];
};

module.exports = getZonesFromItemId;
