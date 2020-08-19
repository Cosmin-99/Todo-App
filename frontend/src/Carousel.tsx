import React from "react";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import { Details } from "./Details";

export function Carousel() {

    return (
        <>
        <div className = "carousel slide" data-ride = "carousel">
            <ul className = "carousel-indicators">
                <li data-target = "#slides" data-slide-to  = "0" className = "active"></li>
                <li data-target = "#slides" data-slide-to  = "1"></li>
                <li data-target = "#slides" data-slide-to  = "2"></li>
            </ul>

            <div className = "carousel-inner">
                <div className = "carousel-item active">
                    <img src = {photo1} />
                </div>
                <div className = "carousel-item">
                    <img src = {photo2}/>
                </div>
                <div className = "carousel-item">
                    <img src = {photo3}/>
                </div>
            </div>
        </div>
    <Details />
    </>
    );
}