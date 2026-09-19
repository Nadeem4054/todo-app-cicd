import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>📝 My Todo App</h1>
        <p className="subtitle">with CI/CD Pipeline</p>

        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="input"
          />
          <button onClick={addTodo} className="btn-add">
            ➕ Add
          </button>
        </div>

        <TodoList 
          todos={todos} 
          onDelete={deleteTodo} 
          onToggle={toggleTodo}
        />

        <div className="stats">
          <p>Total: {todos.length} | Done: {todos.filter(t => t.done).length}</p>
        </div>
      </div>
    </div>
  );
}
