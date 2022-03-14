import Todo from "./Todo";

const NewTodo = ({ todos, setTodos}) => {

    
    return (
        <div className="new-todo-container">
            <ul className="new-todo">
                {todos.map((todo) => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default NewTodo;