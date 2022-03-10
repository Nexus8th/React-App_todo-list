import React from 'react';
import Logo from './components/Logo';
import Todo from './components/Todo';
import Home from './components/Title';
import NewTodo from './components/NewTodo';


const App = () => {
  return (
    <div>
      <Home/>
      <Logo/>
      <Todo/>
      <NewTodo/>
    </div>
  );
};

export default App;