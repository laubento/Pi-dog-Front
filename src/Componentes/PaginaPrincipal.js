import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions.js";
import Card from "./Card.js";
import { Verificacion } from "../redux/actions.js";

export default function PaginaPrincipal(){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const [pageDogs, setpageDogs] = useState(8)
    const [pageDogsInit, setpageDogsInit] = useState(0)
    const [page, setpage] = useState(0)
    const pepe =  allDogs.slice(pageDogsInit, pageDogs)
    console.log(pepe)

    // Para que se ejecute siempre que exista un cambio
    useEffect(() => {
        dispatch(getDogs())
    }, [])
    function handleClick(e){
        e.preventDefault()
    }

    function verificacion(e){
        console.log('ejecuto verificacion')
        dispatch(Verificacion(e.target.value))
    }

    // Funciones para moverse entre paginas
    function pagSum(){
        if(allDogs.slice(pageDogsInit + 8, pageDogs + 8).length === 0) return
        setpageDogs(pageDogs + 8)
        setpageDogsInit(pageDogsInit + 8)
        setpage(page + 1)
    }
    function pagRes(){
        if(pageDogsInit === 0) return
        setpageDogs(pageDogs - 8)
        setpageDogsInit(pageDogsInit - 8)
        setpage(page - 1)
    }

    // El renderizado del componente
    return (
        <div>
            <h3>pag: {page}</h3>
            <h1>Pagina principal</h1>
            <button onClick={e => {pagSum()}}> + </button>
            <button onClick={e => {pagRes()}}> - </button>
            <Link to={'/createdog'}>Crear personaje</Link>
            <button onClick={e => {handleClick(e)}}>Refrescar</button>
            <div>
                <select onChange={e => {verificacion(e)}}>
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
            {pepe.length > 0 ? pepe.map((e, i) => {
                return(
                    <div key={i}>
                        <Card name={e.name} imagen={e.img} />
                    </div>
                )
            }) : <h1>No se encontro el perrito</h1>}
        </div>
    )

}