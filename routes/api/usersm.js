const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Userm = require('../../models/Userm');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('rollno', 'StaffID required').not().isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, rollno, password } = req.body;

    try {
      let userm = await Userm.findOne({ rollno });

      if (userm) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      userm = new Userm({
        name,
        rollno,
        password
      });

      const salt = await bcrypt.genSalt(10);

      userm.password = await bcrypt.hash(password, salt);

      await userm.save();

      const payload = {
        userm: {
          id: userm.id
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
