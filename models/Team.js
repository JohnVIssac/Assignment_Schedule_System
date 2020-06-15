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
  stud1: {
    type: String,
    required: true
  },
  roll1: {
    type: String,
    required: true
  },
  stud2: {
    type: String
  },
  roll2: {
    type: String
  },
  stud3: {
    type: String
  },
  roll3: {
    type: String
  },
  stud4: {
    type: String
  },
  roll4: {
    type: String
  },
  stud5: {
    type: String
  },
  roll5: {
    type: String
  },
  stud6: {
    type: String
  },
  roll6: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Team = mongoose.model('team', UserSchema);
