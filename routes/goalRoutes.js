const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, postGoal);

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);
// router.get("/", getGoals);

// router.post("/", postGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
