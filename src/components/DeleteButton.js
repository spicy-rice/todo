import "../components/components.css";

function DeleteButton({ handleRemoveTask, id }) {
  return (
    <button
      className="delete-button"
      id={id}
      type="button"
      onClick={() => handleRemoveTask(id)}
    >
      -
    </button>
  );
}

export default DeleteButton;
