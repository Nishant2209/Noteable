const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Create a User using: POST "/api/auth/". Doesn't require auth
router.post(
  "/",
  body("name", "Name must be of atleast 3 characters").isLength({ min: 3 }),
  body("email", "Please enter a valid Email").isEmail(),
  // password must be at least 5 chars long
  body("password", "Password must be of atleast 5 characters").isLength({
    min: 5,
  }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => res.json(user));
  }
);

module.exports = router;
