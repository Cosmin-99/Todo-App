import React , {useState} from 'react';
import {data} from "./AddTodoList";
import {status} from "./AddTodoList";

export function Show() {

    const [select , setSelect] = useState("");

    return (
    <div className = "container">
        <h2>Selecteaza statusul dupa care vrei sa filtrezi</h2>   
         <select value = {select} onChange = {e => setSelect(e.target.value)}>
             <option value = "" disabled selected hidden>Selecteaza statusul</option>
                    {status.map(s => <option value={s.val} className = "option">{s.label}</option> )}
         </select>

        <ul>
            {data.filter(x => x.statusActual === select).map(e => <li className = "childList">Titlu :{e.titlu}
                <br/> Status: {e.statusActual}
                <br/> Responsabil: {e.responsabil}
                <br/> Termen Finalizare: {e.termenFinalizare}
                <br/> Data Finalizare: {e.dataFinalizare}</li>)}
        </ul>
    </div>
    );
}