import React from "react";
import TaskListItem from "./task-list-item-component";
import ListGroup from "react-bootstrap/ListGroup";

export default function TaskList(props) {
  return (
    <ListGroup>
      {props.records
        .filter((record) => !record.complete)
        .map((record) => (
          <TaskListItem key={record.taskId} record={record}></TaskListItem>
        ))}
    </ListGroup>
  );
}
