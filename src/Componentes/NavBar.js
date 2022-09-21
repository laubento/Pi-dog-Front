import React from "react";
import { useState } from "react";
import { Buscar } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function NavBar({setcambios, setpage, setpageDogs, setpageDogsInit, cambios}){
    const dispatch = useDispatch()
    const [nombre, setNombre] = useState('')

    function SeteoInput(){
        setcambios(cambios - 1)
        setpage(0)
        setpageDogs(8)
        setpageDogsInit(0)
    }

    function HandleSubmit(e){
        console.log('entre')
        e.preventDefault()
        dispatch(Buscar(nombre)) 
        SeteoInput()
        setNombre('')
    }

    return(
        <div>
            <form onSubmit={(e) => {HandleSubmit(e)}}>
                <input onChange={e => setNombre(e.target.value)} type={'text'} value={nombre}/>
                <button type="submit">Buscar</button>
            </form>  
        </div>
    )
}