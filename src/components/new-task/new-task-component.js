import { useState } from "react";
import axios from "axios";
import NewTaskForm from "./task-form-component";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewTask() {
  const [task, setTask] = useState({ dueDate: new Date(), priority: "LOW" });

  const navigate = useNavigate();

  const createNewTask = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/tasks", task)
      .then((resp) => {
        console.log(task);
        console.log("success!");
        navigate("/tasks");
      })
      .catch((err) => console.error(err));
  };

  const updatedTaskState = (e) => {
    const { name, value } = e.target; //input element
    // console.log(`${name}  ${value}`);
    const newTask = { ...task, [name]: value };
    setTask(newTask);
    console.log(task);
  };

  return (
    <NewTaskForm
      handleChangeEventListener={updatedTaskState}
      handleSubmitEventListener={createNewTask}
    ></NewTaskForm>
  );
}
