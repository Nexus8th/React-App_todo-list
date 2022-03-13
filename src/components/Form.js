const Todo = ({ setInputText, todos, setTodos, inputText }) => {
  
  const inputTextField = (e) => {
    setInputText(e.target.value);
  };
  
  const submitTodo = (e) => {
    e.preventDefault();
    if ( inputText === undefined || inputText === "" || inputText === " ") return;
    
      setTodos([
        ...todos,
        { text: inputText, id: Math.random() * 100000, completed: false },
      ]);
      setInputText("");
  };

  return (
    <div className="todo-container">
      <form className="form">
        <input
          value={inputText}
          onChange={inputTextField}
          className="form-input-text"
          placeholder="Ajouter une tâche"
          type="text"
          required
        ></input>
        <button onClick={submitTodo} className="form-add-btn" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Todo;
