/**
 * main.js
 * Entrypoint for webpack
 */
import 'bootstrap';
import objectFitImages from 'object-fit-images';
import { info } from './utils/debug';
import ready from './utils/ready';
import registerServiceWorker from './utils/serviceWorker';

function onReady(e) {
  registerServiceWorker();
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
}

ready(onReady, {
  date: new Date(),
});

ready(objectFitImages);
