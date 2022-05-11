import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskList from "./task-list-component";

export default function AllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/tasks").then((resp) => {
      setTasks(resp.data);
    });
  }, []);

  return <TaskList records={tasks}></TaskList>;
}
