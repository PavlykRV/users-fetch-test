import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersLayout from './components/UsersLayout/UsersLayout';
import UserLayout from './components/UserLayout/UserLayout';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={UsersLayout} />
        <Route path='/:id' component={UserLayout} />
      </Switch>
    </div>
  );
}

export default App;
