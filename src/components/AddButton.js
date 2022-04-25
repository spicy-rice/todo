import "../components/components.css";

function AddButton({ handleAddTask }) {
  return (
    <button
      className="add-button"
      type="button"
      onClick={(e) => handleAddTask(e)}
    >
      +
    </button>
  );
}

export default AddButton;
