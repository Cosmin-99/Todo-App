import React , {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { AddToDo,Todo } from "./AddTodoList";
import { Menu } from './Menu';
import { Show } from './showToDo';


function App() {

  const [data , setData] = useState<Todo[]>([])

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
          <Route path = "/TodoList" >
             <Show todoData = {data} />
          </Route>
          
        <Route path = "/AddToDo" >
            <AddToDo todoData = {data} uploadData = {setData}/>
        </Route>
    </Router>
    );
}

export default App;