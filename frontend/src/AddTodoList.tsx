import React, { useState } from "react";
import moment from 'moment';
import './App.css';


export interface Status {
    label: string
    val: string
}

export interface Todo {
    id?: number | any,
    titlu: string
    status: string
    responsabil: string
    termenFINALIZARE: any
    dataFinalizare: any
}


export const status: Status[] = [
    { label: "Planificat", val: "Planificat" },
    { label: "In curs", val: "In curs" },
    { label: "Terminat", val: "Terminat" },
    { label: "Blocat", val: "Blocat" }
];


export function AddToDo() {

    const [todo, setToDo] = useState<Todo>({
        titlu: "",
        status: "",
        responsabil: "",
        termenFINALIZARE: "",
        dataFinalizare: ""
    })

    const submitForm = async (): Promise<void> => {

        try {
            const body = { ...todo };

            const response: Response = await fetch("http://localhost:5000/todo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

           
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }


    /*return (
        <div>
            <form className = "form" onSubmit={() => {}}>
            Text
                <input type = "text" placeholder = "Scrie text " value = {todo.text} onChange={e => setToDo( {...todo, text: e.target.value})}/>
            <br/>
            <br/>Responsabil
                <input type = "text" placeholder = "Scrie numele responsabilului" value={todo.responsable} onChange={e => setToDo({...todo, responsable: e.target.value})}/>
            <br/>
            <br/>Added Date
                <input type = "date" value = {todo.addedDate} onChange={e => setToDo({...todo, addedDate: e.target.value})} />
            <br/>
            <br/> Due date
                <input type="date" value = {todo.dueDate} onChange={e => setToDo({...todo, dueDate: e.target.value})} />
        </form>
        
        <button className = "button" onClick={() => props.add(todo)}>
                ADD
            </button>

        </div>
    );*/

    return (
        <>
            <form className="form" onSubmit={() => { }}>
            <ul className="wrapper">
    <li className="form-row">
      <label>Titlu</label>
      <input type="text" value={todo.titlu} placeholder="Scrie titlul todo-ului " onChange={e => setToDo({ ...todo, titlu: e.target.value })} />
    </li>
    <li className="form-row">
      <label>Status</label>
       <select value={todo.status} onChange={e => setToDo({ ...todo, status: e.target.value })}>
                    <option value="" disabled selected hidden>Selecteaza statusul</option>
                    {status.map(s => <option value={s.val}>{s.label}</option>)}
                </select>
    </li>
    <li className = "form-row">
      <label>Responsabil</label>
      <input type="text" placeholder="Scrie numele responsabilului" value={todo.responsabil} onChange={e => setToDo({ ...todo, responsabil: e.target.value })} />
    </li>
	<li className="form-row">
      <label>Termen Finalizare</label>
      <input type="date" onChange={e => setToDo({ ...todo, termenFINALIZARE: moment(e.target.value).format("YYYY-MM-DD") })} />
    </li>
	<li className="form-row">
      <label>Data Finalizare</label>
      <input type="date" onChange={e => setToDo({ ...todo, dataFinalizare: moment(new Date(e.target.value)).format("YYYY-MM-DD") })} />
    </li>
  </ul>
            </form>

            <div className="button2">
                <button type="button" className="btn btn-primary" onClick={submitForm}>
                    ADD
            </button>
            </div>
        </>
    );
} 
