import React from "react";
import home from '../img/HomePagg.jpg'
import style from './Css/image.module.css'

export default function Image(){


    return(
        <div className={style.containerImage}>
            <h1 className={style.titulo}>DOGS API</h1>
            <img className={style.img} alt='Inicio' src={home}/>
        </div>
    )
}