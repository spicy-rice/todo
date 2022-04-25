import "../components/components.css";

function AddButton({ handleAddTask }) {
  return (
    <button
      className="add-button"
      type="button"
      onClick={() => handleAddTask()}
    >
      +
    </button>
  );
}

export default AddButton;
