import React from 'react';
import Logo from './components/Logo';
import Todo from './components/Todo';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
      <Home/>
      <Logo/>
      <Todo/>
    </div>
  );
};

export default App;