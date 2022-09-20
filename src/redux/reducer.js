const initialState = {
    dogs : [],
    allDogs: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'TRAER_PERROS':
            console.log('eadsadsa')
            return {
                ...state,
                dogs: action.payload,
                allDogs : action.payload
            }
        case 'VERIFICACION':
            console.log('verificacion')
            console.log(state.allDogs.slice(0, 3))
            let pepa = action.payload === 'Ascendente' ? 
            state.dogs.sort(function (a, b) {
                if(a.name > b.name)return 1
                if(b.name > a.name)return -1
                return 0
            }): 
                state.dogs.sort(function (a, b) {
                    if(a.name > b.name)return -1
                    if(b.name > a.name)return 1
                    return 0
                })
            return {
                ...state,
                dogs: pepa
            }
        case 'VERIFICACIONBD':
            console.log('verificacionBd')
            console.log(state.allDogs.slice(0, 3))
            let dogsBd = action.payload === 'createForMe' ?  state.allDogs.filter(e => e.createInBd) : state.allDogs.filter(e => !e.createInBd)
            return{
                ...state,
                dogs : action.payload === 'All' ? state.allDogs : dogsBd
            }
        case 'VERIFICACIONTAMANO':
            console.log('verificacionTamano')
            console.log(state.allDogs.slice(0, 3))
            let dogsTamano = action.payload === 'Small' ? 
            state.dogs.sort(function (a, b) {
                if(a.peso.slice(0,2) > b.peso.slice(0,2)) return 1
                if(b.peso.slice(0,2) > a.peso.slice(0,2)) return -1
                return 0
            }): 
                state.dogs.sort(function (a, b) {
                    if(a.peso.slice(0,2) > b.peso.slice(0,2))return -1
                    if(b.peso.slice(0,2) > a.peso.slice(0,2))return 1
                    return 0
                })
                console.log(state.allDogs.slice(0, 3))
            return{
                ...state,
                dogs : action.payload === 'All' ? [] : dogsTamano
            }
        case 'REFRESH':
            console.log('ejecuto')
            return{
                ...state,
                dogs: state.allDogs
            }
        default:
            return state
    }
}