import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Verificacion, VerificacionBd, VerificacionTamano, VerificacionTemperamento } from "../redux/actions.js";

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
        <div>
        <select id="A-Z" onChange={e => {verificacion(e)}}>
            <option value={'Ascendente'}>Ascendente</option>
            <option value={'Descendente'}>Descendente</option>
        </select>
        <select id="Base" onChange={e => {verificacionBd(e)}}>
            <option value={'All'}>All</option>
            <option value={'Web'}>En la web</option>
            <option value={'createForMe'}>Create for me</option>
        </select>
        <select defaultValue={'Size'} id="Tamano" onChange={e => {verificacionTamano(e)}}>
            <option id="Size" disabled  value={'Size'}>Size</option>
            <option value={'Small'}>Small</option>
            <option value={'Big'}>Big</option>
        </select>
        <select defaultValue={'Breeds'} id="Breed" onChange={e => {verificacionTemperamento(e)}}>
            <option id="Breeds" disabled  value={'Breeds'}> Breeds </option>
            {allTemperament.length > 0 ? allTemperament.map((e,i) => {
                return(
                    <option key={i} value={e.name}>{e.name}</option>
                )
            }) : <option>PEPE</option>}
        </select>
    </div>
    )
}