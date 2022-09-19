const initialState = {
    dogs : [],
    allDogs: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'TRAER_PERROS':
            return {
                ...state,
                dogs: action.payload,
                allDogs : action.payload
            }
        case 'VERIFICACION':
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
            let dogsBd = action.payload === 'createForMe' ?  state.allDogs.filter(e => e.createInBd) : state.allDogs.filter(e => !e.createInBd)
            return{
                ...state,
                dogs : action.payload === 'All' ? state.allDogs : dogsBd
            }
        case 'VERIFICACIONTAMANO':
            let dogsTamano = action.payload === 'Small' ? state.allDogs.filter(e => e.peso.slice(0,2) <= 45) : state.allDogs.filter(e => e.peso.slice(0,2) >= 45)
            return{
                ...state,
                dogs : action.payload === 'All' ? state.allDogs : dogsTamano
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