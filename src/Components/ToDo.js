import React, { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  //Setting up useState
  const [data, setData] = useState([]);
  const [newTask, setNewTask] = useState("");

  //Function Responsible for input of the task
  const Input = (event) => {
    setNewTask(event.target.value);
  };

  //Function Responsible for adding of New Task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setData([...data, { text: newTask.trim(), checked: false }]);
      setNewTask("");
    }
  };

  //Function Responsible for the completion and slashing through of done task
  const CompleteTask = (index) => {
    const tasks = [...data];
    tasks[index].checked = !tasks[index].checked;
    setData(tasks);
  };

  //Function Responsible for the deletion of New Task
  const deleteTask = (index) => {
    const tasks = [...data];
    tasks.splice(index, 1);
    setData(tasks);
  };

  return (
    <div className="to-do">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={Input}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {data.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => CompleteTask(index)}
            />
            <span
              className="text"
              style={{ textDecoration: task.checked ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
