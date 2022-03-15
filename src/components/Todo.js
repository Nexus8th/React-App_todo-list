const Todo = ({ text, todo, todos, setTodos}) => {
  
  const deleteBtn = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const editBtn = () => {
    setTodos (todos.map((obj) => {
      if (obj.id === todo.id) {
        return {
          ...obj, edited: !obj.edited
        }
      }
      return obj;
    }))
  }

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

  function isEdited() {
    if (todo.edited === "true") return (
      <input type="text" value={text} className=" todo-item" onChange={(e) => e.preventDefault()}></input>)
      else(
        <li className={`todo-item ${todo.completed ? "completed" : ""}  ${todo.edited ? "edited" : ""}`}>{text}</li>
      )
  };

  return (
    <div className="todo">
      <button onClick={checkBtn} className="check">
        &#10004;
      </button>

      <li className={`todo-item ${todo.completed ? "completed" : ""}  ${todo.edited ? "edited" : ""}`}>{text}</li>
      {/* <input type="text" value={text} className=" todo-item" onChange={(e) => e.preventDefault()}></input>  */}

      <button onClick={editBtn} onChange={isEdited} className="edit">
        &#9998;
      </button>
      <button onClick={deleteBtn} className="delete">
        &#10008;
      </button>
    </div>
  );
};

export default Todo;
