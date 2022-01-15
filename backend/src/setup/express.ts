import * as bodyParser from 'body-parser';
import express from 'express';

import indexRoute from '../routes';

const expressApp = express();

require('dotenv').config();
expressApp.use(bodyParser.json());

// Router
expressApp.use('api', indexRoute);

export const app = expressApp;
