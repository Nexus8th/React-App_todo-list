import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Home from './components/Title';
import NewTodo from './components/NewTodo';


const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    saveLocalTodos();
  });

  useEffect(() => {
    getLocalTodos();
  }, []);

  const saveLocalTodos = () => {
    localStorage.setItem ("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem ("todos") === null) {
      localStorage.setItem ("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem ("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div>
      <Home/>
      <Logo/>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <NewTodo setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;