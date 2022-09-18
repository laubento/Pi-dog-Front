import axios from 'axios'

export function getDogs(){
    return async function(dispatch){
        var pepe = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: 'TRAER_PERROS',
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