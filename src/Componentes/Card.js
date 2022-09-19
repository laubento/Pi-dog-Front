import React from "react";
import style from './Css/Card.module.css'
import patitas from '../img/patitasPag.png'

export default function Card({name, imagen}){
    return(
        <div className={style["container-principal"]}>
            <img className={style.globito} src={patitas} alt="patitas"/>
            <img className={style.globitoAbajo} src={patitas} alt="patitas"/>
            <h1 className={style.titulo}>{name}</h1>
            <img className={style.img} src={`https://cdn2.thedogapi.com/images/${imagen}.jpg`} alt="Img-Dog"/>
        </div>
    )
}