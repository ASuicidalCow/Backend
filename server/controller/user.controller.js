/* eslint-disable import/order */
import express from 'express';
import { User } from '../database/models';
import sha256 from 'sha256';

const userController = express.Router();
/**
 * GET/
 * retrieve and display all Users in the USer Model
 */
userController.get('/', (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result,
    });
  });
});

/**
 * POST/
 * Add new User to the Database
 */
userController.post('/add-user', (req, res) => {
  const { email, password } = req.body;

  const userData = {
    email,
    hashedPassword: sha256(password),
  };
  const newUser = new User(userData);
  newUser
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});

userController.get('/', (req, res) => {
  res.status(200).json({
    status: 'user Controller API call successfully',
  });
});

export default userController;
