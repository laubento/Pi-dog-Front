// Dependencias
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { getDogs, getAllDogs , getTemperament, getPerroIdReset} from "../redux/actions.js";
// Componentes
import NavBar from "./NavBar.js";
import Filtrado from "./Filtrado.js";
import Paginado from "./Paginado.js";
import RefreshButton from "./Refresh.js";
import RenderCard from "./RenderCard.js";
// Estilo
// import style from './Css/PaginaPrincipal.module.css'

export default function PaginaPrincipal(){

    //Constantes
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const [pageDogs, setpageDogs] = useState(8)
    const [pageDogsInit, setpageDogsInit] = useState(0)
    const [page, setpage] = useState(0)
    const [cambios, setcambios] = useState(0)
    let pag = allDogs.slice(pageDogsInit, pageDogs)

    // Para que se ejecute siempre que exista un cambio
     useEffect( () => {
        dispatch(getDogs())
        dispatch(getAllDogs())
        dispatch(getTemperament())
        dispatch(getPerroIdReset())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    // El renderizado del componente
    return (
        <div>
            <h1>Pagina principal</h1>
            <h3>pag: {page}</h3>
            <NavBar 
                setcambios={setcambios} 
                setpage={setpage} 
                setpageDogs={setpageDogs} 
                setpageDogsInit={setpageDogsInit} 
                cambios={cambios}
            />
            <Link to={'/createdog'}>Crear personaje</Link>
            <Filtrado  
                setcambios={setcambios} 
                setpageDogs={setpageDogs} 
                setpageDogsInit={setpageDogsInit} 
                setpage={setpage} 
                cambios={cambios}
            />
            <RefreshButton 
                setcambios={setcambios} 
                cambios={cambios} 
                setpage={setpage} 
                setpageDogs={setpageDogs} 
                setpageDogsInit={setpageDogsInit} 
            />
            <RenderCard 
                pag={pag} 
            />
            <Paginado 
                allDogs={allDogs} 
                pageDogsInit={pageDogsInit} 
                pageDogs={pageDogs} 
                setpageDogs={setpageDogs} 
                setpageDogsInit={setpageDogsInit} 
                setpage={setpage} 
                page={page}
            />
        </div>
    )
}