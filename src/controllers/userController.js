const express = require('express');
var uuid = require('uuid');

const User = require('../models/user.model');
const router = express.Router();
const agegetter = (e) => {
  let day = e.split('/')[0];
  let month = e.split('/')[1];
  let year = e.split('/')[2];
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return calculate_age(new Date(year, month, day));
};
router.post('', async function (req, res) {
  let age = agegetter(req.body?.dob);
  req.body.age = age;
  console.log(req.body);
  const user = await User.create(req.body);
  return res.send({ user });
}),
  router.get('', async function (req, res) {
    console.log('came');
    const users = await User.find({
      $and: [{ age: { $gt: 17 } }, { age: { $lt: 25 } }],
    });

    return res.send({ users });
  });

module.exports = router;
