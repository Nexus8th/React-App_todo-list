const Todo = ({ text, todo, todos, setTodos, editTodos, setEditTodos }) => {
  
  const deleteBtn = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const editBtn = () => {
    return alert("Veuillez passer à la version PRO pour seulement 49.99€ par mois !")
  };

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
        {" "}
        &#10004;{" "}
      </button>

      <>
        {editTodos ? (
          <input
            onChange={(e) => setTodos(e.target.value)}
            autoFocus
            type="text"
            value={text}
            className={`todo-item ${todo.completed ? "completed" : ""} ${
              todo.edited ? "edited" : ""
            }`}
          ></input>
        ) : (
          <li
            className={`todo-item ${todo.completed ? "completed" : ""}  ${
              todo.edited ? "edited" : ""
            }`}
          >
            {text}
          </li>
        )}
      </>

      <button onClick={editBtn} className="edit">
        {" "}
        &#9998;{" "}
      </button>

      <button onClick={deleteBtn} className="delete">
        {" "}
        &#10008;{" "}
      </button>

    </div>
  );
};

export default Todo;
