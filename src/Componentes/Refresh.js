import React from "react";
import { useDispatch } from "react-redux";
import {Refresh} from "../redux/actions.js";

export default function RefreshButton({setcambios, cambios, setpage, setpageDogs, setpageDogsInit}){
    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault()
        dispatch(Refresh())
        setcambios(cambios - 1)
        setpage(0)
        setpageDogs(8)
        setpageDogsInit(0)
    }


    return(
        <button onClick={e => {handleClick(e)}}>Restablecer</button>
    )
}