import React from "react";
import { useState } from "react";
import { Buscar } from "../redux/actions";
import { useDispatch } from "react-redux";
import logo from '../img/Home.png'
import style from './Css/NavBar.module.css'
import { Link } from "react-router-dom";


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
        <div className={style.containerPrincipal}>
            <Link to={'/'} className={style.link}>
                <div className={style.logoCompleto}>
                    <img className={style.logo} alt="logo" src={logo}/>
                    <h1>Project Dogs Api</h1>
                </div>
            </Link>
            <div className={style.formularioContainer}>
                <form className={style.formulario} onSubmit={(e) => {HandleSubmit(e)}}>
                    <input className={style.input} onChange={e => setNombre(e.target.value)} type={'text'} value={nombre}/>
                    <button className={style.button} type="submit">🔎</button>
                </form>  
            </div>
            <div className={style.ubicacion}>
                <div>
                    <h2 className={style.home}>Home</h2>    
                    <hr className={style.hr}/>
                </div>
                <Link className={style.link} to={'/createdog'}>
                    <div className={style.create}>
                        <h2 className={style.createe}>Create</h2>    
                    </div>
                </Link>
                <Link className={style.link} to={'/'}>
                    <div className={style.exit}>
                        <h2 className={style.exitt}>Exit</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}