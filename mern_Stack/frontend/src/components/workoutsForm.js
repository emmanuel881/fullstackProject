import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  //create status for the data
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //dummy workout object that will send as the body

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      //change it to a json file
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //we convert the returned json to a usable formart
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log("new workout added");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <h3>Add a New workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Load (KGs):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Reps count:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add workout</button>
    </form>
  );
};

export default WorkoutForm;
