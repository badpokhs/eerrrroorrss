import React, {useState} from 'react';
import './App.css';

type Task ={
  id: number;
  title: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTaskTitile, setSelectedTaskTitle] = useState('');
  const [selectedTaskDescription, setSelectedTaskDescription] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  }

  const handleAddTask = () => {
    if (title === ''){
      return;
    }

    const newTask: Task = {
      id: tasks.length +1,
      title: title,
      description: description,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  }

  const handleEditTask =(id:number, title:string, description:string) =>{
    setSelectedTaskTitle(title);
    setSelectedTaskDescription(description);
    const updatedTasks = tasks.map ((task) =>{
      if (task.id === id){
        return {
          id: id,
          title: title,
          description: description,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
    setTitle(title);
    setDescription(description);
  }

  const handleDeleteTask = (id:number) =>{
    const updatedTasks = tasks.filter((task) => task.id !==id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={handleDescriptionChange} />
      </div>
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) =>(
            < tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => handleEditTask(task.id, task.title, task.description)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
