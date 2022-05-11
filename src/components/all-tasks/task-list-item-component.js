import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function TaskListItem(props) {
  let priorityIndicator = "";
  if (props.record.priority === "MEDIUM") {
    priorityIndicator = "(!)";
  } else if (props.record.priority === "HIGH") {
    priorityIndicator = "(!!)";
  }
  return (
    <ListGroup.Item>
      {props.record.description} {priorityIndicator}
    </ListGroup.Item>
  );
}
