import { useEffect, useState } from "react";
import AddButton from "./AddButton";
import AllTasks from "./AllTasks";

function Form() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const task = { id: Math.random(), title: newTask };
    setNewTask("");

    setTasks((oldTaskList) => [...oldTaskList, task]);
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
  }

  useEffect(() => {}, [tasks]);

  return (
    <form>
      <div className="input-w-button">
        <input
          className="input-todo"
          type="text"
          placeholder="todo"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        ></input>
        <AddButton handleAddTask={handleAddTask} />
      </div>
      <AllTasks
        className="task-container"
        tasks={tasks}
        handleRemoveTask={handleRemoveTask}
      />
    </form>
  );
}

export default Form;
