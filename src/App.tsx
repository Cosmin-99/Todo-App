import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { AddToDo } from "./AddTodoList";
import { Menu } from './Menu';
import { Show } from './showToDo';


function App() {
    return (
    <Router>
      <h1 className = "header">ToDo App</h1>
      <Menu/>
      <Route path = "/" exact strict render = {
              () => {
                  return (
                    <h1>This is the app Home page , please enjoy !!!
                    </h1>
                  );
              }
          } />
          <Route path = "/TodoList" exact strict component = {Show}/>
          
          <Route path = "/AddToDo" exact strict component = {AddToDo}/>
    </Router>
    );
}

export default App;