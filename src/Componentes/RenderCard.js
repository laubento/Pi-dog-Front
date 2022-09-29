import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import style from './Css/RenderCard.module.css'

export default function RenderCard({pag}){
    return(
        <div className={style.ContainerPrincipal}>
            {pag.length > 0 ? pag.map((e, i) => {
            return(
                <div key={e.id}>
                    <Card 
                        id={e.id}
                        name={e.name} 
                        imagen={e.img} 
                        Temperamento={e.createInBd ? e.temperamentos.map(e => e.name) : e.temperamento}
                        checkBD={e.createInBd}
                        Peso={e.peso} 
                    />
                </div>
            )}) : <div>

                    <h1 className={style.busqueda}> No se encontro el perrito </h1>
                    <img className={style.img} src="https://www.perroperdido.mx/wp-content/uploads/2018/11/logo-perro-perdido-mx.png" alt="Busqueda"/>
                </div> }
        </div>  
    )
}