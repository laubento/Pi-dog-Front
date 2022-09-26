import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";
import style from './Css/RenderCard.module.css'

export default function RenderCard({pag}){
    return(
        <div className={style.ContainerPrincipal}>
            {pag.length > 0 ? pag.map((e, i) => {
            return(
                <Link className={style.link} key={i} to={`/dog/${e.id}`}>
                <div key={e.id}>
                    <Card 
                        name={e.name} 
                        imagen={e.img} 
                        Temperamento={e.createInBd ? e.temperamentos.map(e => e.name) : e.temperamento}
                        checkBD={e.createInBd}
                        Peso={e.peso} 
                    />
                </div>
                </Link>
            )}) : <h1> No se encontro el perrito </h1> }
        </div>  
    )
}