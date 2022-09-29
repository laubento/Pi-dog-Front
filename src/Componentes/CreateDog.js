import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperament, postDog } from "../redux/actions";



export default function CreateDog(){
    const dispatch = useDispatch()
    const allTemperament = useSelector((state) => state.temperamentos)

    useEffect( () => {
        dispatch(getTemperament())
    }, [])

    const [error, setError] = useState({
        nombre: '',
        altura: '',
        peso: '',
        imagen: '',
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
        if(!input.pesoMin || !input.pesoMax){
            errors.peso = 'Weight is required'
        }
        if(!/^([0-9])*$/.test(input.pesoMin) || !/^([0-9])*$/.test(input.pesoMax)){
           errors.peso = 'Only whole numbers are allowed'
        }
        else if(Number(input.pesoMin) < 0){
            errors.peso = 'Weight must be greater than 0'
        }
        else if(input.pesoMin.length > 2 || input.pesoMax.length > 2){
            errors.peso = 'The weight cannot be longer than 2 characters'
        }
        else if(input.pesoMin > input.pesoMax){
            errors.peso = 'Maximum weight must be greater than minimum weight'
        }


        if(Number(input.alturaMin) < 0){
            errors.altura = 'Altura debe ser mayor a 0'
        }
        return errors
    }


    function handleSubmit(e){
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
        setInput({
            ...input,
            temperamentos: input.temperamentos.concat(e.target.value)
        })
    }


    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1>Nombre</h1>
                    <input 
                        value={input.nombre}
                        type={'text'}
                        name="nombre"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                    /> 
                    {error.nombre ? <p>{error.nombre}</p> : null}
                    <hr />
                </div>
                <div>
                    <h1>Peso</h1>
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
                    {error.peso ? <p>{error.peso}</p> : null}
                    <hr />
                </div>
                <div>
                    <h1>Altura</h1>
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
                        {error.altura ? <p>{error.altura}</p> : null}
                    <hr />
                </div>
                <div>
                <h1>Anos de vida</h1>
                    <input 
                        value={input.anosdevidaMin}
                        type={'text'}
                        name="anosdevidaMin"
                        placeholder="Min"
                        onChange={handleChange}
                        required
                    /> 
                    <input 
                        value={input.anosdevidaMax}
                        type={'text'}
                        name="anosdevidaMax"
                        placeholder="Max"
                        onChange={handleChange}
                        required
                    /> 
                </div>
                <div>
                <h1>Criado para</h1>
                    <input 
                        value={input.criadoPara}
                        type={'text'}
                        name="criadoPara"
                        placeholder="Breed"
                        onChange={handleChange}
                    /> 
                    <hr />
                </div>
                <div>
                <h1>Imagen</h1>
                    <input 
                        value={input.imagen}
                        type={'text'}
                        name="imagen"
                        placeholder="URL"
                        onChange={handleChange}
                        required
                    /> 
                    <hr />
                </div>
                <div>
                    <select onChange={e => handletemperament(e)}>
                        <option>Elegir</option>
                        {allTemperament.length > 0 ? allTemperament.map((e,i) => {
                            return(
                                <option key={i} value={e.name}>{e.name}</option>
                            )
                        }) : null}
                    </select>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}