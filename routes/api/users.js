const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register users
// @access  Public
router.post(
  "/",
  [
    check("name", "Your name is required")
      .not()
      .isEmpty(),
    check("email", "A valid email is requied").isEmail(),
    check(
      "password",
      "Your password must contain at least 7 characters"
    ).isLength({
      min: 7
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;
