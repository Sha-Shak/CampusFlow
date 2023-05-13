import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    const newTaskToAdd = [...tasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(newTaskToAdd));
    setTasks(newTaskToAdd);
    setNewTask('');
  };

  const handleDelete = (index) => {
    // Delete task from state at index
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });

    // Delete task from local storage at index
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      parsedTasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(parsedTasks));
    }
  };
  return (
    <div className="p-24">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body flex flex-col">
          <h1 className="text-xl justify-center flex">Tasks</h1>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              value={newTask}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <div key={index} className="flex justify-between">
                <li>{task}</li>
                <button onClick={(i) => handleDelete(i)}>
                  {' '}
                  <FaTrash color="red" fontSize={14} />
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
