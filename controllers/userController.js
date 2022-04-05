// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "register user" });
};

// @desc Authenticate new user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "login user" });
};

// @desc Get user
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: "user data" });
};

module.exports = { registerUser, loginUser, getMe };
