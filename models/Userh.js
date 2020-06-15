const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true
  },
  batch: {
    type: Number,
    required: true
  },
  studno: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Userh = mongoose.model('userh', UserSchema);
