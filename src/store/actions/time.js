const SET_TIME = 'SET_TIME';

/**
 * Action creator, signalling that a timestamp should be stored as the current time.
 *
 * @param  {Number} time - Earth time epoch, in seconds
 *
 * @return {Object}
 */
const setTime = time => ({
  type: SET_TIME,
  time
});

export {
  SET_TIME,
  setTime
};
