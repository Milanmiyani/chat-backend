const express = require('express');
const router = express.Router();
const User = require('../models/User');
// that is a signup path and location
router.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'User all ready  to save ' });
  }
});

// that is check for email in a user in all  etc email used and not used second time
router.post('/check', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;


{/*  that is update code in message time [message code creagte that time]
  
  const express = require('express');
const router = express.Router();
const User = require('../models/User'); // You'll create this file

// Check if user exists, if not create
router.post('/check', async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email });
      await user.save();
      return res.status(201).json({ success: true, exists: false });
    }

    return res.status(200).json({ success: true, exists: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
 */}