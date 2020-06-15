const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authm = require('../../middleware/authh');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Userh = require('../../models/Userh');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', authm, async (req, res) => {
  try {
    const userh = await Userh.findById(req.userh.id).select('-password');
    res.json(userh);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('cname', 'Course Name is required').exists(),
    check('batch', 'Batch is required').exists(),
    check('studno', 'Student Per Team is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cname, batch, studno } = req.body;

    try {
      /*let userh= await Userh.findOne({ email });

      if (!userh) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, userh.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }*/

      const payload = {
        userh: {
          id: userh.id
        }
      };

      /*jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );*/
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
