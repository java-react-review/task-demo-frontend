import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

export default function NewTaskForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          name="description"
          onChange={props.handleChangeEventListener}
        ></Form.Control>
        <Form.Label>Due Date:</Form.Label>
        <Form.Control
          name="dueDate"
          type="date"
          onChange={props.handleChangeEventListener}
        ></Form.Control>
        <Form.Label>Priority:</Form.Label>
        <Form.Select name="priority" onChange={props.handleChangeEventListener}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </Form.Select>
      </Form.Group>
      <br />
      <Button
        variant="info"
        type="submit"
        onClick={props.handleSubmitEventListener}
      >
        Add Task
      </Button>
    </Form>
  );
}
