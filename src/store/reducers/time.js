import { SET_TIME } from 'store/actions/time';
import {
  getEorzeaEpochFromEarthEpoch,
  getEorzeaHoursFromEarthEpoch,
  getEorzeaMinutesFromEarthEpoch
} from 'helpers/eorzeaTime';

const now = new Date().getTime();

const defaultState = {
  timeEarth: now,
  timeEorzea: getEorzeaEpochFromEarthEpoch(now),
  eorzeaMinutes: String(getEorzeaMinutesFromEarthEpoch(now)).padStart(2, '0'),
  eorzeaHours: String(getEorzeaHoursFromEarthEpoch(now)).padStart(2, '0')
};

const timeReducer = (state = defaultState, action) => {
  const { type } = action;

  switch(type) {
    case SET_TIME: {
      const { time } = action;

      return {
        ...state,
        timeEarth: time,
        timeEorzea: getEorzeaEpochFromEarthEpoch(time),
        eorzeaMinutes: String(getEorzeaMinutesFromEarthEpoch(time)).padStart(2, '0'),
        eorzeaHours: String(getEorzeaHoursFromEarthEpoch(time)).padStart(2, '0')
      };
    }
    default:
      return state;
  }
};

export default timeReducer;
