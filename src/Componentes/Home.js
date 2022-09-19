import React from "react";
import { Link } from "react-router-dom";
import home from '../img/Home.png'
import style from './Css/Home.module.css'
import patitas from '../img/patitas.png'

export default function Home(){
    return(
        <div className={style["container-principal-home-page"]}>
            <img alt="Home" src={patitas} className={style["Foto-patitas"]}/>
            <img alt="Home" src={patitas} className={style["Foto-patitas-abajo"]}/>
            <div className={style["Container-Principal-Home"]}>
                <div className={style.cointainerTitulo}>
                    <h1 className={style.titulo}>Proyect Dogs Api</h1>
                    <p>En esta pagina podras ver todas las razas de perros, e incluso crear tu "Dog"</p>
                </div>
                <div className={style.containerImg}>
                    <img alt="Home" src={home} className={style["Foto-Home"]}/>
                    <Link to="/home" className={style["Link"]}>
                        <div className={style["Boton-Home"]}>Entrar</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}