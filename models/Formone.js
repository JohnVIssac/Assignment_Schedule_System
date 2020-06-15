const mongoose = require('mongoose');

const FormoneSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  rollno: {
    type: String,
    required: true
  },
  names: {
    type: String,
    required: true
  },
  dept: {
    type: String,
    required: true
  },
  branch: {
    type: String
  },
  //course ID
  cid: {
    type: String,
    required: true
  },
  //Course Title
  ctitle: {
    type: String,
    required: true
  },
  //No. of hrs courese studied
  hrs: {
    type: Number,
    required: true
  },
  //No. of credit
  credit: {
    type: Number,
    required: true
  },
  mark: {
    type: Number,
    required: true
  },
  student: {
    type: Boolean
  },
  mentor: {
    type: Boolean
  },
  hod: {
    type: Boolean
  },
  principal: {
    type: Boolean
  }

  //Need to upload image of the certificate
  //certificate var
});

module.exports = Formone = mongoose.model('formone', FormoneSchema);
