import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddToDo, Todo } from "./AddTodoList";
import { Menu } from './Menu';
import { Show } from './showToDo';
import moment from 'moment';
import { Carousel } from './Carousel';
import {Details} from './Details'


function App() {

  const [data, setData] = useState<Todo[]>([])
  
  useEffect(() => {
    document.title = "Todo App";
  })

  /* const getData = async () => {
     const todoData = await getToDos();
     setData(todoData);
   }*/

  /*const Add = async (Todo: ToDo2) => {
    Todo.key = Math.random().toString();
    await addToDo(Todo);
  }

  const Remove = async (todo: ToDo2) => {
    await removeToDo(todo);
  }*/

  //getData();

  return (
    <Router>     
      <Menu />
      <Route path="/" >
        <Carousel />
        <Details />
        </Route>
      <Route path="/TodoList" >
         <Show  datas = {data} setData = {setData}/>
      </Route>

      <Route path="/AddToDo" >
        <AddToDo />
      </Route>
    </Router>
  );
}

export default App;