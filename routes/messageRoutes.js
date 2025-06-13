const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Save a message
router.post('/send', async (req, res) => {
  const { email, text, images, time } = req.body;

  try {
    const newMsg = new Message({ email, text, images, time });
    await newMsg.save();
    res.status(201).json({ success: true, message: 'Message saved' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get messages by user
router.get('/get/:email', async (req, res) => {
  try {
    const messages = await Message.find({ email: req.params.email });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

// Get all group messages
router.get('/get', async (req, res) => {
  try {
    const messages = await Message.find().sort({ time: 1 }); // Get all messages sorted by time
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

const User = require('../models/User'); // Make sure you have a User model

// In messageRoutes.js
router.get('/usernames', async (req, res) => {
  try {
    const users = await User.find({}, 'email fullname'); // returns array of { email, fullname }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user names' });
  }
});


module.exports = router;
