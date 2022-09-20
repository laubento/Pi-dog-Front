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

export function VerificacionTamano(payload){
    return function(dispatch){
        return dispatch({
            type: "VERIFICACIONTAMANO",
            payload
        })
    }
}

export function Refresh(){
    return function(dispatch){
        return dispatch({
            type: "REFRESH"
        })
    }
}

export function Incremento(payload){
    return function(dispatch){
        return dispatch({
            type: 'INCREMENTO',
            payload
        })
    }
}

