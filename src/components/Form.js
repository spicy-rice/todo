import { useRef, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Input from "./Input";
import EditInput from "./EditInput";

function Form() {
  // const [newTask, setNewTask] = useState("");
  const inputRef = useRef("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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
    const findIndex = tasks.find((task) => task.id === id);
    return tasks[findIndex].title;
    //edit task by index, but need to add this to array and update it
  }

  // function handleEditTask(id) {
  //   // setIsEditing(true);
  //   console.log(isEditing);
  // }

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
            <EditButton setIsEditing={setIsEditing} />
            {isEditing ? (
              <EditInput
                inputRef={inputRef}
                handleEditTask={handleEditTask}
                id={task.id}
              />
            ) : (
              console.log("isEditing is false")
            )}
          </div>
        ))}
      </ul>
    </form>
  );
}

export default Form;
