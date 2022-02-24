const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    console.log(users)
    // res.send("<h1>Hello, world.</h1>")
    
    res.render('mongoose', {users});
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
