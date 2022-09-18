const initialState = {
    dogs : [],
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'TRAER_PERROS':
            return {
                ...state,
                dogs: action.payload
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
        default:
            return state
    }
}