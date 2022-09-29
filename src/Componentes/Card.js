import React from "react";
import style from './Css/Card.module.css'
import patitas from '../img/patitasPag.png'
import { Link } from "react-router-dom";

export default function Card({name, imagen, Temperamento, Peso, id}){
    
    return(
        <div className={style["container-principal"]}>
            <img className={style.globito} src={patitas} alt="patitas"/>
            <img className={style.globitoAbajo} src={patitas} alt="patitas"/>
            <Link className={style.link} to={`/dog/${id}`}>
                <h1 className={style.titulo}>{name}</h1>
                    <div>
                        <h5 className={style.peso}>Weight: {Peso}</h5>
                    </div>
                <img className={style.img} src={imagen ? imagen : 'https://img.pixers.pics/pho_wat(s3:700/FO/30/92/43/30/700_FO30924330_0a69d232ef220ba85df06b617a4b7b7b.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-sombra-de-perro.jpg.jpg'} alt="Img-Dog"/>
                <div>
                    <ul className={style.temperamentosHome}>
                        {Temperamento.length > 0 ? Temperamento.map((e, i) => {
                            return(
                                <li className={style.temperamentosHomeLI} key={i}>{e}</li>
                            )
                        }) : null}
                    </ul>
                </div>
            </Link>
        </div>
    )
}