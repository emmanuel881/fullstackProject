import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });

    const json = response.json();
    if (response.ok) {
      //perform an action to the global state
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>load (KGs): </strong>
        {workout.load}
      </p>
      <p>
        <strong>reps : </strong>
        {workout.reps}
      </p>

      <p>
        <strong>Created on: </strong>
        {workout.createdAt}
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
