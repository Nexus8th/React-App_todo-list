import React, { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Home from './components/Title';
import NewTodo from './components/NewTodo';


const App = () => {

const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);

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