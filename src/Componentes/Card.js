import React from "react";

export default function Card({name, imagen}){
    return(
        <div>
            <h1>{name}</h1>
            <img src={`https://cdn2.thedogapi.com/images/${imagen}.jpg`} alt="Img-Dog"/>
        </div>
    )
}