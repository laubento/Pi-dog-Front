import axios from 'axios'

export  function getDogs(){
    return async function(dispatch){
        var pepe = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: 'TRAER_PERROS',
            payload: pepe.data
        })
    }
}
export  function getAllDogs(){
    return async function(dispatch){
        var pepe = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: 'TRAER_PERROS_ALL',
            payload: pepe.data
        })
    }
}
export function getTemperament(){
    return async function(dispatch){
        var pepe = await axios.get("http://localhost:3001/temperaments")
        return dispatch({
            type: 'TRAER_TEMPERAMENTOS',
            payload: pepe.data
        })
    }
}

export function Verificacion(payload){
    return function(dispatch){
        return dispatch({
            type: "VERIFICACION",
            payload
        })
    }
}

export function VerificacionBd(payload){
    return function(dispatch){
        return dispatch({
            type: "VERIFICACIONBD",
            payload
        })
    }
}

export function VerificacionTemperamento(payload){
    return function(dispatch){
        return dispatch({
            type: 'VERIFICACION_TEMPERAMENTO',
            payload
        })
    }
}

export function VerificacionTamano(payload){
    return function(dispatch){
        return dispatch({
            type: "VERIFICACIONTAMANO",
            payload
        })
    }
}

export function Refresh(){
    return async function(dispatch){
        var pepe = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: 'REFRESH',
            payload: pepe.data
        })
    }   
}

export function Buscar(payload){
    return function(dispatch){
        return dispatch({
            type: 'BUSQUEDA',
            payload
        })
    }
}

export function getPerroId(id){
    return async function(dispatch){
        let pepe = await axios.get(`http://localhost:3001/dogs/${id}`)
        return dispatch({
            type: 'PERRO_ID',
            payload: pepe.data
        })
    }   
}
export function getPerroIdReset(){
    return async function(dispatch){
        return dispatch({
            type: 'PERRO_ID_RESET',
        })
    }   
}

export function postDog(input){
    return async function(dispatch){
        await axios.post(`http://localhost:3001/dogs`, input)
        return dispatch({
            type: 'POST_DOG',
        })
    }   
}
