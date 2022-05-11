export default NewTaskForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          name="description"
          //   onChange={props.handleChangeEventListener}
        ></Form.Control>
        <Form.Label>Due Date:</Form.Label>
        <Form.Control
          name="dueDate"
          type="date"
          //   onChange={props.handleChangeEventListener}
        ></Form.Control>
        <Form.Label>Priority:</Form.Label>
        <Form.Control
          name="releaseYear"
          type="number"
          //   onChange={props.handleChangeEventListener}
        ></Form.Control>
      </Form.Group>
      <Button
        variant="info"
        type="submit"
        onClick={props.handleSubmitEventListener}
      >
        Add Task
      </Button>
    </Form>
  );
};
