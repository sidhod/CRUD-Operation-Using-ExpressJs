import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('', newUserValidator, userController.newUser);

//delete all user
router.delete('', userController.deleteAllUsers);

//route to get a single user by their user id
//userAuth
router.get('/:_id', userController.getUser);

//Search By Name
router.get('/firstname/:firstName', userController.getUserByFirstName);

//route to update a single user by their user id
router.put('/update/:_id', userController.updateUser);

//route to delete a single user by their user id
router.delete('/delete/:_id', userController.deleteUser);

export default router;
