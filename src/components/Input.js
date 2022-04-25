import AddButton from "./AddButton";

function Input({ inputRef, handleAddTask }) {
  return (
    <div>
      <input
        ref={inputRef}
        className="input-todo"
        type="text"
        placeholder="Create a new todo"
        // onChange={(e) => setNewTask(e.target.value)}
        // value={inputRef.current.value}
      />
      <AddButton handleAddTask={handleAddTask} />
    </div>
  );
}

export default Input;
