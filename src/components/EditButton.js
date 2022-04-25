function EditButton({ handleEditTask, id }) {
  return (
    <button
      className="edit-button"
      id={id}
      type="button"
      onClick={() => handleEditTask(id)}
    >
      Edit
    </button>
  );
}

export default EditButton;
