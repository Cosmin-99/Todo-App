import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";


export function Menu() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand"><img src={logo} /></a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/TodoList" style={{ textDecoration: 'none' }}>ToDo List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AddTodo" style={{ textDecoration: 'none' }}>Add ToDo</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}