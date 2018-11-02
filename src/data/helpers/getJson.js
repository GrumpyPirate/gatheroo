const fs = require('fs');
const csvtojson = require('csvtojson');
const request = require('request');

const entities = require('./entities');

const isDev = true;

const getJson = entityType => {
  if (!(entityType in entities)) throw Error(`Config for EntityType '${entityType}' not found.`);

  const convertToJson = (resolve, csvString, error) => {
    return csvtojson(entities[entityType].config)
      .fromString(csvString)
      .then(json => resolve({ name: entityType, json }));
  };

  return new Promise((resolve, reject) => {
    if (isDev) {
      return fs.readFile(
        entities[entityType].urls.dev,
        'utf8',
        (error, data) => convertToJson(resolve, data, error)
      );
    }

    return request(
      entities[entityType].urls.prod,
      (error, response, data) => convertToJson(resolve, data, error)
    );
  });
};

module.exports = getJson;
