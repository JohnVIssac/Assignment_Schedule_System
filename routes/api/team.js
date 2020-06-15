const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
//const jwt = require('jsonwebtoken');
//const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const Team = require('../../models/Team');

// @oute    POST api/posts
// @desc     Create a team
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('cname', 'Course Name is required').not().isEmpty(),
      check('batch', 'Batch is requied').not().isEmpty(),
      check('teamno', 'Team Number is required').not().isEmpty(),
      check('stud1', 'Student1 Name is required').not().isEmpty(),
      check('roll1', 'Roll Number1 is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      cname,
      batch,
      teamno,
      stud1,
      roll1,
      stud2,
      roll2,
      stud3,
      roll3,
      stud4,
      roll4,
      stud5,
      roll5,
      stud6,
      roll6
    } = req.body;

    try {
      const user = await User.findById(req.user.id).select('-password');
      //const userh = await Userh.findById(req.userh.id).select('-password');
      newPost = new Team({
        rollno: user.rollno,
        cname,
        batch,
        teamno,
        stud1,
        roll1,
        stud2,
        roll2,
        stud3,
        roll3,
        stud4,
        roll4,
        stud5,
        roll5,
        stud6,
        roll6
      });
      const team = await newPost.save();
      res.json(team);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route GET api/teams
//@desc Get all teams
//@access Private
router.get('/', (req, res) => {
  Team.find({})
    .then((data) => {
      //console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', daerrorta);
    });
});

module.exports = router;
