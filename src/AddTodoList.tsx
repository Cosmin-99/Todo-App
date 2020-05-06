import React, {useState} from "react";
import {ToDo2} from './todoServices';
import {Show} from './showToDo';

interface Status  {
   label: string
   val: string
}

export interface Todo {
    titlu: string
    statusActual: string
    responsabil: string
    termenFinalizare: string
    dataFinalizare: string
}

// export const data: Todo[] = [];  //this array should be store objects with data from todoForm

export const status: Status[] = [
    {label:"Planificat" , val: "Planificat"},
    {label:"In curs" , val: "In curs"},
    {label:"Terminat" , val: "Terminat"},
    {label:"Blocat" , val: "Blocat"}
];


export function AddToDo(props: {datas: ToDo2[] , add: (todo: ToDo2) => void, getdata: () => void }) {


    const [todo, setToDo] = useState<ToDo2>({
        key: "" ,  //Am incercat aici cu Math.random , dar ramane aceeasi valoare 
        text: "",
        responsable: "",
        addedDate: "",
        dueDate: ""
    }) 

    return (
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
    );
}


    
   /* return (
      <>
        /* <form className = "form" onSubmit={() => {}}>
            Titlu
                <input type = "text" placeholder = "Scrie titlul todo-ului " onChange={e => setToDo( {...todo, titlu: e.target.value})}/>
            <br/>
            <br/>Status
                <select value={todo.statusActual} onChange={e => setToDo({...todo, statusActual: e.target.value})}>
                    <option value = "" disabled selected hidden>Selecteaza statusul</option>
                    {status.map(s => <option value = {s.val}>{s.label}</option> )}
                </select>
            <br/>
            <br/>Responsabil
                <input type = "text" placeholder = "Scrie numele responsabilului" value={todo.responsabil} onChange={e => setToDo({...todo, responsabil: e.target.value})}/>
            <br/>
            <br/>Termen Finalizare
                <input type = "date" value = {todo.termenFinalizare} onChange={e => setToDo({...todo, termenFinalizare: e.target.value})} />
            <br/>
            <br/> Data Finalizare
                <input type="date" value = {todo.dataFinalizare} onChange={e => setToDo({...todo, dataFinalizare: e.target.value})} />
        </form>

            <button className = "button" onClick={() => props.todoData.push(todo)}>
                ADD
            </button>
      </>
    ); */
