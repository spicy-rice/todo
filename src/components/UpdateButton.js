function UpdateButton({ handleEditTask, id }) {
  return (
    <button
      className="edit-button"
      id={id}
      type="button"
      onClick={() => handleEditTask(id)}
    >
      Update
    </button>
  );
}

export default UpdateButton;
