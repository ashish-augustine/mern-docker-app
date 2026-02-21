import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: input })
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>{tasks.map(t => <li key={t._id}>{t.name}</li>)}</ul>
    </div>
  );
}
export default App;