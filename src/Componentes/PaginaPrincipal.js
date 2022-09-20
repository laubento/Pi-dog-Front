import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions.js";
import Card from "./Card.js";
import { Verificacion, VerificacionBd, VerificacionTamano, Refresh } from "../redux/actions.js";
import style from './Css/PaginaPrincipal.module.css'

export default function PaginaPrincipal(){

    //Constantes
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const [pageDogs, setpageDogs] = useState(8)
    const [pageDogsInit, setpageDogsInit] = useState(0)
    const [page, setpage] = useState(0)
    const [cambios, setcambios] = useState(0)
    var pepe =  allDogs.slice(pageDogsInit, pageDogs)

    // Para que se ejecute siempre que exista un cambio
    useEffect(() => {
        dispatch(getDogs())
    }, [])

    // Inutil por ahora
    function handleClick(e){
        e.preventDefault()
        dispatch(Refresh())
        setcambios(cambios - 1)
        setpage(0)
        setpageDogs(8)
        setpageDogsInit(0)
    }

    // Funcion para filtro A - Z
    async function verificacion(e){
        dispatch(Verificacion(e.target.value))
        setcambios(cambios + 1)
        setpageDogs(8)
        setpageDogsInit(0)
        setpage(0)
    }    
    // Funcion para filtro BASE DATOS
    async function verificacionBd(e){
        dispatch(VerificacionBd(e.target.value))
        setcambios(cambios - 1)
        setpageDogs(8)
        setpageDogsInit(0)
        setpage(0)
    }
    // Funcion para filtro tamano
    async function verificacionTamano(e){
        dispatch(VerificacionTamano(e.target.value))
        setcambios(cambios + 1)
        setpageDogs(8)
        setpageDogsInit(0)
        setpage(0)
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
            <div className={style["container-fotoInicio"]}></div>
            <button onClick={e => {pagSum()}}> + </button>
            <button onClick={e => {pagRes()}}> - </button>
            <Link to={'/createdog'}>Crear personaje</Link>
            <button onClick={e => {handleClick(e)}}>Restablecer</button>
            <div>
                <select onChange={e => {verificacion(e)}}>
                    <option value={'Ascendente'}>Ascendente</option>
                    <option value={'Descendente'}>Descendente</option>
                </select>
                <select onChange={e => {verificacionBd(e)}}>
                    <option value={'All'}>All</option>
                    <option value={'Web'}>En la web</option>
                    <option value={'createForMe'}>Create for me</option>
                </select>
                <select onChange={e => {verificacionTamano(e)}}>
                    <option value={'All'}>Tamano</option>
                    <option value={'Small'}>Small</option>
                    <option value={'Big'}>Big</option>
                </select>
            </div>
            <div className={style.containerCards}>
                {pepe.length > 0 ? pepe.map((e, i) => {
                    console.log(e.peso)
                    return(
                        <div key={i}>
                            <Card name={e.name} imagen={e.img} />
                        </div>
                    )
                }) : <h1>No se encontro el perrito</h1>}
            </div>
        </div>
    )

}