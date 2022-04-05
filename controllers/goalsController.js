const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).send({ message: goals });
});

//@desc     Post goal
//@route    POST /api/goals
//@access   Private
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(201).send({ message: goal });
});

//@desc     Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send({ message: updatedGoal, id: req.params.id });
});

//@desc     Delete goal
//@route    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.send({ message: "Delete Goal", id: req.params.id });
});

module.exports = { getGoals, postGoal, updateGoal, deleteGoal };
