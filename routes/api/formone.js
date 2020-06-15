const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Post = require('../../models/Post');

router.post(
  '/',
  [
    auth,
    [
      check('cid', 'Course ID is required').not().isEmpty(),
      check('ctitle', 'Course Title is required').not().isEmpty(),
      check('hrs', 'Number of hours ID is required').not().isEmpty(),
      check('credit', 'Credit is required').not().isEmpty(),
      check('mark', 'Mark is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      rollno,
      names,
      dept,
      branch,
      cid,
      ctitle,
      hrs,
      credit,
      mark,
      student,
      mentor,
      hod,
      principal
    } = req.body;

    // Build profile object
    const formoneFields = {};
    formoneFields.user = req.user.id;
    if (rollno) formoneFields.rollno = rollno;
    if (names) formoneFields.names = names;
    if (dept) formoneFields.dept = dept;
    if (branch) formoneFields.branch = branch;
    if (cid) formoneFields.cid = cid;
    if (ctitle) formoneFields.ctitle = ctitle;
    if (hrs) formoneFields.hrs = hrs;
    if (credit) formoneFields.credit = credit;
    if (mark) formoneFields.mark = mark;
    if (student) formoneFields.student = student;
    if (mentor) formoneFields.mentor = mentor;
    if (hod) formoneFields.hod = hod;
    if (principal) formoneFields.principal = principal;

    if (id) formoneFields.id = id;

    // Build social object
    /*profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;
    */
    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: formoneFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
