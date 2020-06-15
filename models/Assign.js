const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  rollno: {
    type: String,
    require: true
  },
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

module.exports = Assign = mongoose.model('assign', UserSchema);
