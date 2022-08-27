const { json } = require('express');
const { User } = require('../models');

const userController = {
  //Get all Users
  getAllUsers(req, res) {
    User.find({})
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        res.status(400).json(err);
      });
  },

  //Get one User by ID
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this ID.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        res.status(400).json(err);
      })
  },
  //Create a new User
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },
  //Update User by ID
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this ID.' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
  },
  //Delete a User by ID
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this ID.' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
  },

  //Add a friend (another user)
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { new: true }
    )
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this ID.' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },

  // Delete a Friend
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this ID.' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err))
  }
};



module.exports = userController;