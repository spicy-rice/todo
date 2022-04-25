import DeleteButton from "./DeleteButton";

function AllTasks({ tasks, handleRemoveTask }) {
  return (
    <ul className="all-tasks-list">
      {tasks.map((task) => (
        <div className="task-container">
          <li className="tasks-listed" key={task.id}>
            {task.title}
          </li>
          <DeleteButton
            className="delete-button"
            key={task.id}
            handleRemoveTask={handleRemoveTask}
          />
        </div>
      ))}
    </ul>
  );
}

export default AllTasks;
