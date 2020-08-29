import express from 'express';
import bodyParser from 'body-parser';
import moongoose from 'mongoose';

import { userController } from './controller';

const app = express();

// use dependecies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.use('/', userController);

// Start Server Here
app.listen(8080, () => {
  console.log('Server is running on port 8080!');
  moongoose.connect('mongodb://localhost/test').then(() => {
    console.log('connected to mongoDB at port 27017');
  });
});
