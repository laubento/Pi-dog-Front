import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTemperament, postDog } from "../redux/actions";
import style from './Css/CreateDog.module.css'
import logo from '../img/Home.png'
import Card from "./Card";




export default function CreateDog(){
    const dispatch = useDispatch()
    const allTemperament = useSelector((state) => state.temperamentos)
    const [numTemperamentos, setNumTemperamentos] = useState(0)
    const [enviar, setEnviar] = useState(true)

    useEffect( () => {
        dispatch(getTemperament())
    }, [])

    const [error, setError] = useState({
        nombre: '',
        altura: '',
        peso: '',
        anoDeVida: '',
        criadoPara: ''
    })

    const [input, setInput] = useState({
        nombre: '',
        alturaMin: '',
        alturaMax: '',
        pesoMin: '',
        pesoMax: '',
        imagen: '',
        anosdevidaMax: '',
        anosdevidaMin: '',
        temperamentos: [],
        criadoPara: '',
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function validate(input){
        let errors = {}
        //Nombre
        if(!input.nombre){
            errors.nombre = 'Name is required'
        }
        else if(input.nombre.length > 30){
            errors.nombre = 'Too many characters'
        }
        else if(true){
            for(let a = 0; a < input.nombre.length; a++){
                if(!isNaN(input.nombre[a])){
                    errors.nombre = 'No numbers allowed'
                }
            }
        }
        //Peso
        if(!input.pesoMin || !input.pesoMax){
            errors.peso = 'Weight is required'
        }
        else if(Number(input.pesoMin) < 0){
            errors.peso = 'Weight must be greater than 0'
        }
        else if(!/^([0-9])*$/.test(input.pesoMin) || !/^([0-9])*$/.test(input.pesoMax)){
           errors.peso = 'Only whole numbers are allowed'
        }
        else if(input.pesoMin.length > 2 || input.pesoMax.length > 2){
            errors.peso = 'The weight cannot be longer than 2 characters'
        }
        else if(Number(input.pesoMin) > Number(input.pesoMax)){
            errors.peso = 'Maximum weight must be greater than minimum weight'
        }
        //Altura
        if(!input.alturaMin || !input.alturaMax){
            errors.altura = 'Height is required'
        }
        else if(Number(input.alturaMin) < 0){
            errors.altura = 'Height must be greater than 0'
        }
        else if(!/^([0-9])*$/.test(input.alturaMin) || !/^([0-9])*$/.test(input.alturaMax)){
           errors.altura = 'Only whole numbers are allowed'
        }
        else if(input.alturaMin.length > 2 || input.alturaMax.length > 2){
            errors.altura = 'The Height cannot be longer than 2 characters'
        }
        else if(Number(input.alturaMin) > Number(input.alturaMax)){
            errors.altura = 'Maximum Height must be greater than minimum Height'
        }
        //Esperanza de vida
        if(Number(input.anosdevidaMin) < 0){
            errors.anoDeVida = 'Life expectancy must be greater than 0'
        }
        else if(!/^([0-9])*$/.test(input.anosdevidaMin) || !/^([0-9])*$/.test(input.anosdevidaMax)){
           errors.anoDeVida = 'Only whole numbers are allowed'
        }
        else if(input.anosdevidaMin.length > 2 || input.anosdevidaMax.length > 2){
            errors.anoDeVida = 'The Life expectancy cannot be longer than 2 characters'
        }
        else if(Number(input.anosdevidaMin) > Number(input.anosdevidaMax)){
            errors.anoDeVida = 'Maximum Life expectancy must be greater than minimum Life expectancy'
        }
        //Criado para
        if(input.criadoPara.length > 20){
            errors.nombre = 'Too many characters'
        }
        else if(true){
            for(let a = 0; a < input.criadoPara.length; a++){
                if(!isNaN(input.criadoPara[a])){
                    errors.criadoPara = 'No numbers allowed'
                }
            }
        }

        if((!errors.nombre && !errors.altura && !errors.peso) && !errors.criadoPara && !errors.anoDeVida){
            console.log('entre')
            setEnviar(false)
        }else{
            setEnviar(true)
        }

        return errors
    }

    function handleSubmit(e){
        document.getElementById('temp').value = 'elegir'
        e.preventDefault()
        let pepe = {
            name: input.nombre,
            altura: input.alturaMin + ' - ' + input.alturaMax,
            peso: input.pesoMin + ' - ' + input.pesoMax,
            anoDeVida: input.anosdevidaMin + ' - ' + input.anosdevidaMin,
            criadoPara: input.criadoPara,
            img: input.imagen,
            temperamento: input.temperamentos 
        }
        dispatch(postDog(pepe))
        alert("Dogs Creado")
        setInput({
            nombre: '',
            alturaMin: '',
            alturaMax: '',
            pesoMin: '',
            pesoMax: '',
            imagen: '',
            anosdevidaMax: '',
            anosdevidaMin: '',
            temperamentos: [],
            criadoPara: '',
        })
    }

    function handletemperament(e){
        console.log(numTemperamentos)
        let pepe = input.temperamentos.length > 0 ? input.temperamentos.find(ele => ele === e.target.value) : null
        console.log(pepe)
        if(pepe) return
        if(numTemperamentos > 9) return
        setNumTemperamentos(numTemperamentos + 1)
        setInput({
            ...input,
            temperamentos: input.temperamentos.concat(e.target.value)
        })
    }

    function handleDelete(eve){
        setNumTemperamentos(numTemperamentos - 1)
        console.log(numTemperamentos)
        setInput({
            ...input,
            temperamentos: input.temperamentos.filter(e => e != eve.target.value)
        })
    }


    return(
        <div className={style.containerPrincipal}>

            <div className={style.containerBack}>
                <h2>Create your dog</h2>
                <h4>"A dog doesn't care if you're rich or poor, smart or dumb. Give him your heart and he'll give you his."</h4>
                <Link className={style.link} to={'/home'}>
                    <h3>Back</h3>
                    <div className={style.containerIMG}>
                        <img className={style.logo} src={logo} alt="logo"/>
                    </div>
                </Link>
            </div>

            <div className={style.containerInfo}>

                <div className={style.formularios}>
                    <form onSubmit={(e) => handleSubmit(e)}>

                        <div className={style.container}>
                            <div className={style.info}>
                                <h1>Name</h1>
                                <input 
                                    value={input.nombre}
                                    type={'text'}
                                    name="nombre"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    required
                                /> 
                            </div>
                            {error.nombre ? <p className={style.errors}>{error.nombre}</p> : null}
                            
                        </div>
                        <div className={style.container}>
                            <div className={style.info}>
                                <h1>Weight</h1>
                                <input 
                                    value={input.pesoMin}
                                    type={'text'}
                                    name="pesoMin"
                                    placeholder="Min"
                                    onChange={handleChange}
                                    required
                                /> 
                                <input 
                                    value={input.pesoMax}
                                    type={'text'}
                                    name="pesoMax"
                                    placeholder="Max"
                                    onChange={handleChange}
                                    required
                                /> 
                            </div>
                            {error.peso ? <p className={style.errors}>{error.peso}</p> : null}
                            
                        </div>
                        <div className={style.container}>
                            <div className={style.info}>
                                <h1>Height</h1>
                                <input 
                                    value={input.alturaMin}
                                    type={'text'}
                                    name="alturaMin"
                                    placeholder="Min"
                                    onChange={handleChange}
                                    required
                                    /> 
                                <input 
                                    value={input.alturaMax}
                                    type={'text'}
                                    name="alturaMax"
                                    placeholder="Max"
                                    onChange={handleChange}
                                    required
                                    /> 
                            </div>
                            {error.altura ? <p className={style.errors}>{error.altura}</p> : null}
                            
                        </div>
                        <div className={style.container}>
                            <div className={style.info}>
                                <h1>Life expectancy</h1>
                                    <input 
                                        value={input.anosdevidaMin}
                                        type={'text'}
                                        name="anosdevidaMin"
                                        placeholder="Min"
                                        onChange={handleChange}
                                    /> 
                                    <input 
                                        value={input.anosdevidaMax}
                                        type={'text'}
                                        name="anosdevidaMax"
                                        placeholder="Max"
                                        onChange={handleChange}
                                    /> 
                            </div>
                            {error.anoDeVida ? <p className={style.errors}>{error.anoDeVida}</p> : null}
                
                        </div>
                        <div className={style.container}>
                            <div className={style.info}>
                                <h1>Created for</h1>
                                    <input 
                                        value={input.criadoPara}
                                        type={'text'}
                                        name="criadoPara"
                                        placeholder="Breed"
                                        onChange={handleChange}
                                    /> 
                            </div>
                            {error.criadoPara ? <p className={style.errors}>{error.criadoPara}</p> : null}
                            
                        </div>
                        <div className={style.container}>
                        <div className={style.info}>
                            <h1>Image</h1>
                                <input 
                                    value={input.imagen}
                                    type={'text'}
                                    name="imagen"
                                    placeholder="URL"
                                    onChange={handleChange}
                                /> 
                        </div>
                        </div >
                        <div className={style.container}>
                            <div className={style.info}>
                                <h1>Temperaments</h1>
                                <select id="temp" defaultValue={'elegir'} onChange={e => handletemperament(e)}>
                                    <option disabled value={'elegir'} id="elegir"> Temperament </option>
                                    {allTemperament.length > 0 ? allTemperament.map((e,i) => {
                                        return(
                                            <option key={i} value={e.name}>{e.name}</option>
                                        )
                                    }) : null}
                                </select>
                            </div>
                            <ul className={style.lista}>
                                {input.temperamentos ? input.temperamentos.map((e,i) => {
                                    return(
                                        <li key={i}>
                                            {e}
                                            <button className={style.borrar} type="button" value={e} onClick={eve => handleDelete(eve)}>x</button>
                                        </li>
                                    )
                                }) : null}
                            </ul>
                        </div>
                        <button className={enviar ? style.buttonDisable : style.button  } disabled={enviar} type="submit">Create</button>
                    </form>
                </div>

                <div className={style.renderizado}>
                        <Card  name={input.nombre} imagen={input.imagen} Temperamento={input.   temperamentos} Peso={input.pesoMin + ' - ' + input.pesoMax}/>
                    <div className={style.Card}>
                    </div>
                </div>
            </div>
        </div>
    )
}