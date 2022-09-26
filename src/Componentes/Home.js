import React from "react";
import { Link } from "react-router-dom";
import home from '../img/ImagenInicio.png'
import perros from '../img/perritos.png'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import style from './Css/Home.module.css'
import patitas from '../img/patitas.png'

export default function Home(){
    return(
        <div className={style["container-principal-home-page"]}>
            <img alt="Home" src={patitas} className={style["Foto-patitas"]}/>
            <img alt="Home" src={patitas} className={style["Foto-patitas-abajo"]}/>
            <div className={style["Container-Principal-Home"]}>
            <img alt="linkedin" src={linkedin} className={style.linkedin} />
            <img alt="linkedin" src={github} className={style.github}/>
                <div className={style.containerImg}>
                    <img alt="Home" src={home} className={style["Foto-Home"]}/>
                    <h1 className={style.titulo}>Project Dogs Api</h1>
                    <img alt="prueba" src={perros} className={style.FotoPerros}/>
                    <p className={style.parrafo}>CREATE OR SEARCH YOUR DOG</p>
                    <Link to="/home" className={style["Link"]}>
                        <div className={style["Boton-Home"]}>Home</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}