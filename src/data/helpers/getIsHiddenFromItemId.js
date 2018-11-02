/**
 * Gets the isHidden flag for an Item.
 *
 * @param  {Object} db     - Instance of lowdb
 * @param  {String} itemId - Item ID
 *
 * @return {Boolean}       - isHidden flag
 */
const GetIsHiddenFromItemID = (db, itemId) => {
  // Get the gatheringItem for this itemId
  const gatheringItem = db.get('GatheringItem')
    .value()
    .find(gatheringItem => gatheringItem.item === itemId);

  if (gatheringItem) return gatheringItem.isHidden.toLowerCase() === 'true';

  return false;
};

module.exports = GetIsHiddenFromItemID;
