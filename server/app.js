import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { userController } from './controller';

const app = express();

// use dependecies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.use('/', userController);

// Start Server Here
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 8080!');
  mongoose.connect('mongodb://localhost/test').then(() => {
    // eslint-disable-next-line no-console
    console.log('connected to mongoDB at port 27017');
  });
});
