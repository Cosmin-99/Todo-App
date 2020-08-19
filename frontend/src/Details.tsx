import React from "react";
import pern from "./photos/pern.png";


export function Details(){

    return (
        <div className = "conatiner-fluid padding">
            <div className = "row text-center padding">
                <div className = "col-12">
                    <h1>This is my ToDo App , please enjoy it !!!</h1>
                    <h2>App was created using Typescript and the PERN Stack</h2>
                </div>

                <div className = "col-12 social padding">
                   <img src = {pern}/>
                </div>
            </div>
        </div>
    );
}