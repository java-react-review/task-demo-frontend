import { useState } from "react";

export default NewTaskForm = () => {
  const [task, setTask] = useState({});

  const createNewTask = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/tasks", task)
      .then((resp) => console.log("success!"))
      .catch((err) => console.error(err));
  };

  return <NewTaskForm></NewTaskForm>;
};
