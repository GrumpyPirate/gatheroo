const eorzeaTimeConstant = 20.571428571428573; // = 720 / 35

const getEorzeaEpochFromEarthEpoch = earthEpoch => earthEpoch * eorzeaTimeConstant;

const getEorzeaMinutesFromEarthEpoch = earthEpoch => Math.round((getEorzeaEpochFromEarthEpoch(earthEpoch) / (1000 * 60)) % 60);

const getEorzeaHoursFromEarthEpoch = earthEpoch => Math.floor((getEorzeaEpochFromEarthEpoch(earthEpoch) / (1000 * 60 * 60)) % 24);

const getEorzeaDaysFromEarthEpoch = earthEpoch => Math.floor((getEorzeaEpochFromEarthEpoch(earthEpoch) / (1000 * 60 * 60 * 24)) % 8);

export {
  eorzeaTimeConstant,
  getEorzeaEpochFromEarthEpoch,
  getEorzeaMinutesFromEarthEpoch,
  getEorzeaHoursFromEarthEpoch,
  getEorzeaDaysFromEarthEpoch
};
