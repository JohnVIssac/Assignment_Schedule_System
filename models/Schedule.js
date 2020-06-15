const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  rollno: {
    type: String,
    required: true
  },
  cname: {
    type: String,
    required: true
  },
  batch: {
    type: Number,
    required: true
  },
  teamno: {
    type: Number,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  datep: {
    type: Date,
    required: true
  },
  period: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Schedule = mongoose.model('schedule', UserSchema);
