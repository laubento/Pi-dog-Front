import React from "react";
import home from '../img/HomePagg.jpg'
import style from './Css/image.module.css'

export default function Image(){


    return(
        <div className={style.containerImage}>
            <img className={style.img} alt='Inicio' src={home}/>
        </div>
    )
}