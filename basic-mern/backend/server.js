const express = require("express")
require("dotenv").config()
const workoutRoutes = require("./routes/workouts.js")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// middlewares ====
app.use(express.json()) // Parses the request body to json
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes ====
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to app" })
// })
app.use("/api/workouts", workoutRoutes) // attaches all the routes defined in workouts.js file to 'app'

// connect to DB - We will only start listening to requests on server once we are connected to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB. Server started")
    })
  })
  .catch((err) => console.log(err))
