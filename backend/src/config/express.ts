import * as bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRoute from '../routes/index.route';
import joiErrorHandler from '../middlewares/joiErrorHandler';
import * as errorHandler from '../middlewares/apiErrorHandler';

const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.use(morgan('dev'));

// Router
app.use('/api', indexRoute);

// Joi Error Handler
app.use(joiErrorHandler);
// Error Handler
app.use(errorHandler.notFoundErrorHandler);

app.use(errorHandler.errorHandler);

export default app;
