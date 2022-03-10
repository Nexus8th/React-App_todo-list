import React from 'react';

const Todo = () => {
    return (
        <div className="todo-container">
            <form className="form">
                <input className="form-input-text" placeholder="Ajouter une tâche" type="text" required></input>
                <button className="form-add-btn" type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Todo;