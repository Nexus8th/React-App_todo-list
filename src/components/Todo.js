const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteBtn = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const editBtn = () => {};
  const checkBtn = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <button onClick={checkBtn} className="check">
        &#10004;
      </button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={editBtn} className="edit">
        &#9998;
      </button>
      <button onClick={deleteBtn} className="delete">
        &#10008;
      </button>
    </div>
  );
};

export default Todo;
