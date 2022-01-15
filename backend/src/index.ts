import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { app } from './setup';
const PORT = process.env.PORT || 5000;

createConnection()
  .then(() => {
    app.listen(PORT);
  })
  .catch((_error: Error) => {
    //   write logs here
  });
