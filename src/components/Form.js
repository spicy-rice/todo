import { useRef, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Input from "./Input";

function Form() {
  // const [newTask, setNewTask] = useState("");
  const inputRef = useRef("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const task = {
      id: Math.floor(Math.random() * 100),
      title: inputRef.current.value,
    };
    // setNewTask("");
    inputRef.current.value = "";
    setTasks([...tasks, task]);
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(tasks);
    console.log(id);
  }

  function handleEditTask(id) {
    console.log("Edit button works");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-w-button">
        <Input inputRef={inputRef} handleAddTask={handleAddTask} />
      </div>
      <ul className="all-tasks-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-container">
            <li className="tasks-listed">{task.title}</li>
            <DeleteButton id={task.id} handleRemoveTask={handleRemoveTask} />
            <EditButton id={task.id} handleEditTask={handleEditTask} />
          </div>
        ))}
      </ul>
    </form>
  );
}

export default Form;
