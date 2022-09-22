import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card.js";

export default function RenderCard({pag}){
    return(
        <div>
            {pag.length > 0 ? pag.map((e, i) => {
            return(
                <Link key={i} to={`/dog/${e.id}`}>
                <div key={e.id}>
                    <Card 
                        name={e.name} 
                        imagen={e.img} 
                        Temperamento={e.temperamento} 
                        Peso={e.peso} 
                    />
                </div>
                </Link>
            )}) : <h1> No se encontro el perrito </h1> }
        </div>  
    )
}