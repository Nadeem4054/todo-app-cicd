import './TodoList.css';

export default function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No todos yet! Add one above 👆</p>
      ) : (
        todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
              className="checkbox"
            />
            <span className={todo.done ? 'done' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => onDelete(todo.id)}
              className="btn-delete"
            >
              🗑️
            </button>
          </div>
        ))
      )}
    </div>
  );
}
