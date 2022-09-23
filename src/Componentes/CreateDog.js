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
        nombre: 'Ingresa un nombre valido',
        altura: 'Ingresa solo numeros',
        peso: 'Ingresa solo numeros',
        imagen: 'Ingresa un url valida',
        criadoPara: 'Ingresa solo texto'
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