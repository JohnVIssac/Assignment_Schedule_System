const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authm = require('../../middleware/authm');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Userm = require('../../models/Userm');
const Assign = require('../../models/Assign');

// @oute    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [
    authm,
    [
      check('cname', 'Course Name is required').not().isEmpty(),
      check('batch', 'Batch is requied').not().isEmpty(),
      check('studno', 'Student Per Team is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cname, batch, studno } = req.body;

    try {
      //const user = await User.findById(req.user.id).select('-password');
      const userm = await Userm.findById(req.userm.id).select('-password');
      newPost = new Assign({
        rollno: userm.rollno,
        cname,
        batch,
        studno
      });
      const assign = await newPost.save();
      res.json(assign);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route GET api/assign
//@desc Get all assignment
//@access Public
router.get('/', (req, res) => {
  Assign.find({})
    .then((data) => {
      //console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', daerrorta);
    });
});

module.exports = router;
