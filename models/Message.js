const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  email: String,
  text: String,
  images: [String], // base64 or file URLs
  time: String,
});

module.exports = mongoose.model('Message', messageSchema);

