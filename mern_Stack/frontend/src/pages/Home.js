import { useEffect, useState } from "react";

//components
import WorkoutDetails from "../components/workoutDetails";
const Home = () => {
  //lets create a useState to watch over changes
  const [workouts, setWorkouts] = useState(null);

  //let us import data from our backend
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      //taking the json file and change it to a workable format
      const json = await response.json();

      //check if the fetch went well
      if (response.ok) {
        setWorkouts(json);
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
    </div>
  );
};

export default Home;
