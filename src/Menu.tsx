import React from "react";
import {Link} from "react-router-dom";
import {AddToDo} from "./AddTodoList";

export function Menu(){
    return(
      <div className = "menu">
          <ul className = "menuList">
              <li>
                  <Link to = "/" style = {{textDecoration: 'none'}}>Home</Link>
              </li>

              <li>
                  <Link to = "/TodoList" style = {{textDecoration: 'none'}}>ToDo List</Link>
              </li>
              <li>
                  <Link to = "/AddTodo" style = {{textDecoration: 'none'}}>Add ToDo</Link>
              </li>
          </ul>
        </div>
    );
}