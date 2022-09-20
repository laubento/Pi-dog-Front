import React from "react";
import style from './Css/Card.module.css'
import patitas from '../img/patitasPag.png'

export default function Card({name, imagen}){

    return(
        <div className={style["container-principal"]}>
            <img className={style.globito} src={patitas} alt="patitas"/>
            <img className={style.globitoAbajo} src={patitas} alt="patitas"/>
            <h1 className={style.titulo}>{name}</h1>
            <img className={style.img} src={imagen ? imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4HJhnJo07reTM0Lta1HoTollHloqsqRUVw&usqp=CAU'} alt="Img-Dog"/>
        </div>
    )
}