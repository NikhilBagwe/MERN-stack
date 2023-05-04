// Now we don't have access to 'app' variable here. So we use Express router

const express = require("express")
const Workout = require("../models/workoutModel")
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController")

const router = express.Router()

// Adding Request handlers to our router =====

// GET all workouts
// router.get("/", (req, res) => {
//   res.json({ msg: "GET all workouts" })
// })
router.get("/", getWorkouts)

// GET a single workout
router.get("/:id", getWorkout)

// POST a new workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// UPDATE a workout
router.patch("/:id", updateWorkout)

module.exports = router
