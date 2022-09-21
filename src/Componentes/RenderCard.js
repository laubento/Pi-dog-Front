import React from "react";
import Card from "./Card.js";

export default function RenderCard({pag}){
    return(
        <div>
            {pag.length > 0 ? pag.map((e, i) => {
            return(
                <div key={i}>
                    <Card 
                        name={e.name} 
                        imagen={e.img} 
                        Temperamento={e.temperamento} 
                        Peso={e.peso} 
                    />
                </div>
            )}) : <h1> No se encontro el perrito </h1> }
        </div>  
    )
}