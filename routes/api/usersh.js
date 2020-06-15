const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Userh = require('../../models/Userh');

//GET all users to display by ME
// @route    GET api/userh - added assignments
// @desc     Get all userh - added assignments
// @access   Public -> Private
router.get('/', async (req, res) => {
  try {
    const userh = await Userh.find().populate('userh', [
      'cname',
      'batch',
      'studno'
    ]);
    res.json(userh);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('cname', 'Course Name is required').not().isEmpty(),
    check('batch', 'Batch is requied').not().isEmpty(),
    check('studno', 'Student Per Team is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cname, batch, studno } = req.body;

    try {
      //let userh = await Userh.findOne({ email });

      /* if (userh) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }*/

      userh = new Userh({
        cname,
        batch,
        studno
      });

      //const salt = await bcrypt.genSalt(10);

      //userh.password = await bcrypt.hash(password, salt);

      await userh.save();

      const payload = {
        userh: {
          id: userh.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
