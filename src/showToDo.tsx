import React , {useState} from 'react';
import {status,Todo} from "./AddTodoList";
import {ToDo2} from './todoServices';

export function Show(props: {datas: ToDo2 , delete: (todo: ToDo2) => void}) {

    const [select , setSelect] = useState("");

    return (
        <div>
            <ul>
                <li className = "childList">Responsable: {props.datas.responsable}
                                            <br/>Text: {props.datas.text}
                                            <br/>Added Date: {props.datas.addedDate}
                                            <br/>Due Date: {props.datas.dueDate}
                </li>

                <button onClick = {() => props.delete(props.datas)}>
                    Delete
                </button>
            </ul>
        </div>    
    );

   /* return (
    <div className = "container">
        <h2>Selecteaza statusul dupa care vrei sa filtrezi</h2>   
         <select value = {select} onChange = {e => setSelect(e.target.value)}>
             <option value = "" disabled selected hidden>Selecteaza statusul</option>
                    {status.map(s => <option value={s.val} className = "option">{s.label}</option> )}
         </select>

        <ul>
            {props.todoData.filter(x => x.statusActual === select).map(e => <li className = "childList">Titlu :{e.titlu}
                <br/> Status: {e.statusActual}
                <br/> Responsabil: {e.responsabil}
                <br/> Termen Finalizare: {e.termenFinalizare}
                <br/> Data Finalizare: {e.dataFinalizare}</li>)}
        </ul>
    </div>
    ); */
}