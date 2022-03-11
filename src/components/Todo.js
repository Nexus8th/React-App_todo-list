const Todo = ({text, todo, todos, setTodos}) => {

const deleteBtn = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
}

    return (
        <div className="todo">
            <button className="check">&#10004;</button>
            <li className="todo-item">{text}</li>
            <button className="edit">&#9998;</button>
            <button onClick={deleteBtn} className="delete">&#10008;</button>
        </div>
    );
};

export default Todo;