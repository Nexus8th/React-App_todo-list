import Todo from "./Todo";

const NewTodo = () => {


    return (
        <div className="new-todo-container">
            <ul className="new-todo"></ul>
            <Todo/>
        </div>
    );
};

export default NewTodo;