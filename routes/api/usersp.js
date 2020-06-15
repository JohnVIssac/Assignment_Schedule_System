const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Userp = require('../../models/Userp');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('cname', 'Course Name is required').not().isEmpty(),
    check('batch', 'Batch is required').not().isEmpty(),
    check('teamno', 'Team Number is required').not().isEmpty(),
    check('topic', 'Topic is required').not().isEmpty(),
    check('datep', 'Date To Present is required').not().isEmpty(),
    check('period', 'Period To Present is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cname, batch, teamno, topic, datep, period } = req.body;

    try {
      /* let userp = await Userp.findOne({ email });

      if (userp) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }*/

      userp = new Userp({
        cname,
        batch,
        teamno,
        topic,
        datep,
        period
      });

      //const salt = await bcrypt.genSalt(10);

      //userp.password = await bcrypt.hash(password, salt);

      await userp.save();

      const payload = {
        userp: {
          id: userp.id
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
