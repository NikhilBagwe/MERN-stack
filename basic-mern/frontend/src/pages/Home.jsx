import React, { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const Home = () => {
  // const [workouts, setWorkouts] = useState(null)
  const { workouts, dispatch } = useWorkoutsContext()

  // fetch workouts from the backend
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:8080/api/workouts/")

      // convert to array of objects
      const json = await response.json()

      if (response.ok) {
        // setWorkouts(json)
        dispatch({ type: "SET_WORKOUTS", payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>

      <WorkoutForm />
    </div>
  )
}

export default Home
