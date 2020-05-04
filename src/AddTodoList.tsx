import React, {useState} from "react";

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

export function AddToDo(props: {todoData: Todo[] , uploadData:  React.Dispatch<React.SetStateAction<Todo[]>>}) {

    const [todo, setToDo] = useState<Todo>({
        titlu: "",
        statusActual: "",
        responsabil: "",
        termenFinalizare: "",
        dataFinalizare: ""
    })
    
    return (
      <>
        <form className = "form" onSubmit={() => {}}>
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
    );
}
