import "../components/components.css";

function DeleteButton({ handleRemoveTask, id }) {
  return (
    <button
      className="delete-button"
      key={id}
      type="button"
      onClick={() => handleRemoveTask(id)}
    >
      -
    </button>
  );
}

export default DeleteButton;
