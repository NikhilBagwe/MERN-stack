const mongoose = require("mongoose")

const Schema = mongoose.Schema

// Schema defines the structure of a particular document
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

// We will use the 'Workout' model to interact with the 'workouts' collection in DB. Automatically a collection is created based on the name of model. Name of model is pluralized.
module.exports = mongoose.model("Workout", workoutSchema)
