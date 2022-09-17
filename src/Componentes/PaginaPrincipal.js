import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions.js";
import Card from "./Card.js";

export default function PaginaPrincipal(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)

    useEffect(() => {
        dispatch(getDogs())
    }, [])

    function handleClick(e){
        e.preventDefault()
    }

    return (
        <div>
            <h1>Pagina principal</h1>
            <Link to={'/createdog'}>Crear personaje</Link>
            <button onClick={e => {handleClick(e)}}>Refrescar</button>
            <div>
                <select>
                    <option value={'Ascendente'}>Ascendente</option>
                    <option value={'Descendente'}>Descendente</option>
                </select>
                <select>
                    <option value={'All'}>All</option>
                    <option value={'createForMe'}>Create for me</option>
                </select>
                <select>
                    <option></option>
                </select>
            </div>
            {allDogs ? allDogs.map(e => {
                return(
                    <Card name={e.name} imagen={e.img} />
                )
            }) : 'No se encontro el perrito'}
        </div>
    )

}