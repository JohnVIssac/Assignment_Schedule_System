const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authm = require('../../middleware/authm');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Userm = require('../../models/Userm');
const Schedule = require('../../models/Schedule');

// @oute    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [
    authm,
    [
      check('cname', 'Course Name is required').not().isEmpty(),
      check('batch', 'Batch is required').not().isEmpty(),
      check('teamno', 'Team Number is required').not().isEmpty(),
      check('topic', 'Topic is required').not().isEmpty(),
      check('datep', 'Date To Present is required').not().isEmpty(),
      check('period', 'Period To Present is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cname, batch, teamno, topic, datep, period } = req.body;

    try {
      //const user = await User.findById(req.user.id).select('-password');
      const userm = await Userm.findById(req.userm.id).select('-password');
      newPost = new Schedule({
        rollno: userm.rollno,
        cname,
        batch,
        teamno,
        topic,
        datep,
        period
      });
      const schedule = await newPost.save();
      res.json(schedule);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route GET api/schedule
//@desc Get all schedule
//@access Public
router.get('/', (req, res) => {
  Schedule.find({})
    .then((data) => {
      //console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', daerrorta);
    });
});

module.exports = router;
