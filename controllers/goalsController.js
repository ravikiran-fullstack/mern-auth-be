const asyncHandler = require("express-async-handler");

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).send({ message: "goals" });
});

//@desc     Post goal
//@route    POST /api/goals
//@access   Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field");
  }
  res.status(201).send({ message: "Create Goal" });
});

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
  res.send({ message: "Update Goal", id: req.params.id });
});

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.send({ message: "Delete Goal", id: req.params.id });
});

module.exports = { getGoals, postGoal, updateGoal, deleteGoal };
