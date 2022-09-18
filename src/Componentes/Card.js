import React from "react";
import style from './Css/Card.module.css'

export default function Card({name, imagen}){
    return(
        <div className={style["container-principal"]}>
            <h1>{name}</h1>
            <img className={style.img} src={`https://cdn2.thedogapi.com/images/${imagen}.jpg`} alt="Img-Dog"/>
        </div>
    )
}