import { Client } from 'elasticsearch';
import * as config from './config';

const esClient = new Client({
  host: config.ELASTICSEARCH_HOST,
  log: config.ELASTICSEARCH_LOG,
});

const ping = () => esClient.ping({
    requestTimeout: 30000,
  });

const createIndex = indexName => esClient.indices.create({ index: indexName });

const indexExists = (indexName) => {
  esClient.indices.exists({ index: indexName }, (error, response) => {
    if (error) {
      console.error(`ERROR - indexExists - ${indexName} , ${error}`);
      return error;
    }
    console.log(`indexExists : ${indexName}`);
    return response;
  });
};

const initIndexMapping = (indexName, docType, payload) => {
  esClient.indices.putMapping({
    index: indexName,
    type: docType,
    body: payload,
  }, (error, response) => {
    if (error) {
      console.error(`ERROR - initIndexMapping - ${indexName} , ${error}`);
      return error;
    }
    console.log(`initIndexMapping : ${indexName}`);
    return response;
  });
};

const addDocument = (indexName, _id, docType, payload) => esClient.index({
    index: indexName,
    type: docType,
    id: _id,
    body: payload,
  });


const updateDocument = (indexName, _id, docType, payload) => {
  esClient.update({
    index: indexName,
    type: docType,
    id: _id,
    body: payload,
  }, (error, response) => {
    if (error) {
      console.error(`ERROR - updateDocument - ${indexName} , ${error}`);
      return error;
    }
    console.log(`updateDocument : ${indexName}`);
    return response;
  });
};

const search = (indexName, docType, payload) => esClient.search({
    index: indexName,
    type: docType,
    q: payload,
  });


const deleteDocument = (indexName, _id, docType) => {
  esClient.delete({
    index: indexName,
    type: docType,
    id: _id,
  }, (error, response) => {
    if (error) {
      console.error(`ERROR - delete - ${indexName} , ${error}`);
      return error;
    }
    console.log(`delete : ${indexName}`);
    return response;
  });
};

const deleteAll = () => esClient.indices.delete({
    index: '_all',
  });

export {
  ping,
  createIndex,
  indexExists,
  initIndexMapping,
  addDocument,
  updateDocument,
  search,
  deleteDocument,
  deleteAll,
};
