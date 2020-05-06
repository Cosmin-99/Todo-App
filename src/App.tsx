import React , {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { AddToDo,Todo } from "./AddTodoList";
import { Menu } from './Menu';
import { Show } from './showToDo';
import {ToDo2, getToDos , addToDo , removeToDo} from './todoServices';


function App() {

  const [data , setData] = useState<ToDo2[]>([])

  const getData = async () => {
    const todoData = await getToDos();
    setData(todoData);
  }

    const Add = async (Todo: ToDo2) => {
         Todo.key = Math.random().toString();
          await addToDo(Todo); 
}

const Remove = async (todo: ToDo2) => {
  await removeToDo(todo);
}

getData();

    return (
    <Router>
      <h1 className = "header">ToDo App</h1>
      <Menu/>
    
      <Route path = "/" exact strict render = {
              () => {
                  return (
                    <h1>This is the app Home page , please enjoy !!!</h1>
                  );
              }
          } />
          <Route path = "/TodoList" >
             {data.map( (e) => <Show datas = {e} delete = {Remove} />)}
          </Route>
          
        <Route path = "/AddToDo" >
            <AddToDo datas = {data} add = {Add} getdata = {getData} />
        </Route>
    </Router>
    );
}

export default App;