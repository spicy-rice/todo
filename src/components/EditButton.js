function EditButton({ setIsEditing }) {
  return (
    <button
      className="edit-button"
      type="button"
      onClick={() => setIsEditing(true)}
    >
      Edit
    </button>
  );
}

export default EditButton;
