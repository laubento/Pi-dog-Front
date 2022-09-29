import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Verificacion, VerificacionBd, VerificacionTamano, VerificacionTemperamento } from "../redux/actions.js";
import RefreshButton from "./Refresh.js";
import style from './Css/Filtrado.module.css'

export default function Filtrado({setcambios, setpageDogs, setpageDogsInit, setpage, cambios}){
    const dispatch = useDispatch()
    const allTemperament = useSelector((state) => state.temperamentos)

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
    // Funcion para filtro Tamano
    async function verificacionTamano(e){
        dispatch(VerificacionTamano(e.target.value))
        setcambios(cambios + 1)
        setpageDogs(8)
        setpageDogsInit(0)
        setpage(0)
    }
    // Funcion para filtro Temperamento
    async function verificacionTemperamento(e){
        dispatch(VerificacionTemperamento(e.target.value))
        setcambios(cambios + 1)
        setpageDogs(8)
        setpageDogsInit(0)
        setpage(0)
    }

    return(

    <div className={style.containerPrincipal}>
        <div className={style.container}>
            <h3>Filtering</h3>
            <select id="Base" onChange={e => {verificacionBd(e)}}>
                <option value={'All'}>All</option>
                <option value={'Web'}>Web</option>
                <option value={'createForMe'}>Create for me</option>
            </select>
            <select defaultValue={'Breeds'} id="Breed" onChange={e => {verificacionTemperamento(e)}}>
                <option id="Breeds" disabled  value={'Breeds'}> Temperaments </option>
                {allTemperament.length > 0 ? allTemperament.map((e,i) => {
                    return(
                        <option key={i} value={e.name}>{e.name}</option>
                    )
                }) : <option>PEPE</option>}
            </select>
        </div>
            <RefreshButton 
                setcambios={setcambios} 
                cambios={cambios} 
                setpage={setpage} 
                setpageDogs={setpageDogs} 
                setpageDogsInit={setpageDogsInit} 
            />
        <div className={style.container}>
            <h3>Ordering</h3>
            <select defaultValue={'abc'} id="A-Z" onChange={e => {verificacion(e)}}>
                <option id="abc" disabled value={'abc'}>ABC..</option>
                <option value={'Ascendente'}>A - Z</option>
                <option value={'Descendente'}>Z - A</option>
            </select>
            <select defaultValue={'Size'} id="Tamano" onChange={e => {verificacionTamano(e)}}>
                <option id="Size" disabled  value={'Size'}>Size</option>
                <option value={'Small'}>Small</option>
                <option value={'Big'}>Big</option>
            </select>
        </div>
    </div>
    )
}