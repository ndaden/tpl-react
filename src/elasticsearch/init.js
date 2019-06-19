import { Client } from 'elasticsearch';
import * as config from './config';

const client = new Client({
    host: config.ELASTICSEARCH_HOST,
    log: config.ELASTICSEARCH_LOG,
});

export const ping = () => {
    client.ping({
        requestTimeout: 30000,
      }, (error) => {
        if (error) {
          console.error('ELASTICSEARCH DOWN');
        } else {
          console.log('Connected to ElasticSearch !');
        }
      });
};

export default client;
