{/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

module.exports = mongoose.model('User', userSchema);*/}


 //that is update code in message time [message code creagte that time]
  
  const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
  },
  password: String,
  address: String,
  country: String,
  state: String,
  city: String,
  pcode: String,
  date: String,
  gender: String
});

module.exports = mongoose.model('User', userSchema);
