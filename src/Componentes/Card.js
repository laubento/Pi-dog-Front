import React from "react";
import style from './Css/Card.module.css'
import patitas from '../img/patitasPag.png'

export default function Card({name, imagen}){

    return(
        <div className={style["container-principal"]}>
            <img className={style.globito} src={patitas} alt="patitas"/>
            <img className={style.globitoAbajo} src={patitas} alt="patitas"/>
            <h1 className={style.titulo}>{name}</h1>
            <img className={style.img} src={`http://cdn2.thedogapi.com/images/${imagen}.jpg` ? `https://cdn2.thedogapi.com/images/${imagen}.jpg` : 'https://st2.depositphotos.com/1011352/5361/i/600/depositphotos_53619879-stock-photo-french-bulldog-with-huge-smile.jpg'} alt="Img-Dog"/>
        </div>
    )
}