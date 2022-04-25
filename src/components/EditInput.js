import UpdateButton from "./UpdateButton";

function EditInput({ inputRef, handleEditTask, id }) {
  return (
    <form>
      <input
        ref={inputRef}
        className="edit-todo"
        type="text"
        placeholder="Edit todo"
      />
      <UpdateButton handleEditTask={handleEditTask} id={id} />
    </form>
  );
}

export default EditInput;
