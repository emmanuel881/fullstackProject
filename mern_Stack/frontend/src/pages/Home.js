import { useEffect } from "react";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutsForm";
const Home = () => {
  //lets create a useState to watch over changes
  //const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();

  //let us import data from our backend
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      //taking the json file and change it to a workable format
      const json = await response.json();

      //check if the fetch went well
      if (response.ok) {
        //setWorkouts(json);
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, []);
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
  );
};

export default Home;
