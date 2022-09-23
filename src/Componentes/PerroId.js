import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPerroId } from "../redux/actions";
import { useSelector } from "react-redux";

export default function PerroId(){
    const dispatch = useDispatch()
    let {id} = useParams()
    const Dog = useSelector((state) => state.dog)

    useEffect( () => {
        dispatch(getPerroId(id))
    },[])

    return(
        <div>
            <h1>{Dog.name}</h1>
            <img src={Dog.img} alt="Img-Dog"/>
            <h1>{Dog.altura}</h1>
            <h1>{Dog.peso}</h1>
            <h1>{Dog.anosDeVida}</h1>
            <ul>{Dog.temperamento ? Dog.temperamento.map((e, i) => {
                return(
                    <li key={i}>{e}</li>
                )
            }) : null}
            </ul>
            <ul>{Dog.temperamentos ? Dog.temperamentos.map((e, i) => {
                return(
                    <li key={i}>{e.name}</li>
                )
            }) : null}
            </ul>
            <h1>{Dog.criadoPara}</h1>
        </div>
    )
}