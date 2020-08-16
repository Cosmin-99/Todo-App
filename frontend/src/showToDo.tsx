import React, { useState, SetStateAction, useEffect } from 'react';
import { status, Todo , Status } from "./AddTodoList";
import moment from 'moment';
import './showTodo.css'

export function Show(props: { setData: (e: SetStateAction<Todo[]>) => void ,datas: Todo[] }) {

    const getTodos = async (): Promise<void> => {
        try {
            const response: Response = await fetch("http://localhost:5000/todo");
            const jsonData = await response.json();

            props.setData(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTodo = async (id: number): Promise<void> => {
        try {
            const response: Response = await fetch(`http://localhost:5000/todo/${id}`, {
                method: "DELETE"
            });

            props.setData(props.datas.filter(todo => todo.id !== id))

        } catch (err) {
            console.log(err);
        }
    }

    const updateTodo = async (): Promise<void> => {
        try {
            const body = {...todos};
            const response = await fetch(`http://localhost:5000/todo/${todos.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location.href = "/TodoList";

            console.log(response);
        } catch (err){
            console.log(err);
        }
    }


    useEffect(() => {
        getTodos();
    }, []);

    const [select, setSelect] = useState("");
    const [todos,setTodos] = useState<Todo>({
        titlu: "",
        status: "",
        responsabil: "",
        termenFINALIZARE: moment(""),
        dataFinalizare: moment("")
    })


    return (
        <div className="container">
            <h2>Selecteaza statusul dupa care vrei sa filtrezi</h2>
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value="" disabled selected hidden>Selecteaza statusul</option>
                {status.map(s => <option value={s.val} className="option">{s.label}</option>)}
            </select>

            <ul>
                {props.datas.filter(x => x.status === select).map(e => <li className="childList">Titlu: {e.titlu}
                    <br /> Status: {e.status}
                    <br /> Responsabil: {e.responsabil}
                    <br /> Termen Finalizare: {moment(e.termenFINALIZARE).format('DD-MM-YYYY')}
                    <br /> Data Finalizare: {moment(e.dataFinalizare).format('DD-MM-YYYY')}
                    <div className="flex-container">
                        <button type="button" className="btn btn-danger" onClick={() => deleteTodo(e.id)}> Delete </button>
                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick = {() => setTodos(e)}> Edit </button>
                    </div>
                </li>
                )}
            </ul>

            <div className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Titlu
                            <input type="text" value={todos.titlu} placeholder="Scrie noul titlul todo-ului " onChange={e => setTodos({ ...todos, titlu: e.target.value })} />
                            <br />
                            <br />Status
                            <select value={todos.status} onChange={e => setTodos({ ...todos, status: e.target.value })}>
                                <option value="" disabled selected hidden>Selecteaza statusul</option>
                                {status.map(s => <option value={s.val}>{s.label}</option>)}
                            </select>
                            <br />
                            <br />Responsabil
                            <input type="text" placeholder="Scrie numele responsabilului" value={todos.responsabil} onChange={e => setTodos({ ...todos, responsabil: e.target.value })} />
                            <br />
                            <br />Termen Finalizare
                            <input type="date"  onChange={e => setTodos({ ...todos, termenFINALIZARE: moment(e.target.value).format('YYYY-MM-DD') })} />
                            <br />
                            <br /> Data Finalizare
                            <input type="date"  onChange={e => setTodos({ ...todos, dataFinalizare: moment(e.target.value).format('YYYY-MM-DD') })} />
                        </div>
                        <div className="modal-footer">
                                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick = {updateTodo}>Edit</button>
                                <button type="button" className="btn btn-danger">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}