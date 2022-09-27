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
                <img className={style.img} src={imagen ? imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4HJhnJo07reTM0Lta1HoTollHloqsqRUVw&usqp=CAU'} alt="Img-Dog"/>
                <div>
                    <ul className={style.temperamentosHome}>
                        {Temperamento.length > 0 ? Temperamento.map((e, i) => {
                            return(
                                <li className={style.temperamentosHomeLI} key={i}>{e}</li>
                            )
                        }) : null}
                    </ul>
                    <h5>{Peso}</h5>
                </div>
            </Link>
        </div>
    )
}