import React from "react";
import { Link } from "react-router-dom";
import home from '../img/Home.png'
import './Css/Home.css'
import patitas from '../img/patitas.png'

export default function Home(){
    return(
        <div className="container-principal-home-page">
            <img alt="Home" src={patitas} className="Foto-patitas"/>
            <div className="Container-Principal-Home">
                <img alt="Home" src={home} className="Foto-Home"/>
                <Link to="/home" className="Link">
                    <div className="Boton-Home">Entrar</div>
                </Link>
            </div>
            <img alt="Home" src={patitas} className="Foto-patitas-abajo"/>
        </div>
    )
}