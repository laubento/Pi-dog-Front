const initialState = {
    dogs : [],
    allDogs: [],
    temperamentos: [],
    dog: {}
}

export default function reducer(state = initialState, action){
    switch(action.type){
        // Traer informacion para el state
        case 'TRAER_PERROS':
            return {
                ...state,
                dogs: action.payload,
            }
        case 'TRAER_PERROS_ALL':
            return{
                ...state,
                allDogs: action.payload
            }
        case 'TRAER_TEMPERAMENTOS':
            return{
                ...state,
                temperamentos: action.payload
            }
        // Busqueda por input
        case 'BUSQUEDA':
            let inputBusqueda = state.allDogs.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
            return{
                ...state,
                dogs: inputBusqueda
            }
        // Filtrados
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
                dogs: pepa,
                allDogs: state.allDogs
            }
        case 'VERIFICACIONBD':
            let dogsBd = action.payload === 'createForMe' ?  state.allDogs.filter(e => e.createInBd) : state.allDogs.filter(e => !e.createInBd)
            return{
                ...state,
                dogs : action.payload === 'All' ? state.allDogs : dogsBd,
                allDogs: state.allDogs
            }
        case 'VERIFICACION_TEMPERAMENTO':
            let array = []
            for(let i = 0; i < state.allDogs.length; i++){
                if(state.allDogs[i].temperamento !== undefined){
                    for(let a = 0; a < state.allDogs[i].temperamento.length; a++){
                        if(state.allDogs[i].temperamento[a] === action.payload){
                            array.push(state.allDogs[i])
                        }
                    }
                }else{
                    for(let a = 0; a < state.allDogs[i].temperamentos.length; a++){
                        if(state.allDogs[i].temperamentos[a].name === action.payload){
                            array.push(state.allDogs[i])
                        }
                    }
                }
            }
            return {
                ...state,
                dogs: array
            }
        case 'VERIFICACIONTAMANO':
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
            return{
                ...state,
                dogs : dogsTamano,
            }

        case 'REFRESH':
            document.getElementById('Tamano').value = 'Size'
            document.getElementById('Base').value = 'All'
            document.getElementById('A-Z').value = 'Ascendente'
            document.getElementById('Breed').value = 'Breeds'
            return{
                ...state,
                dogs: action.payload,
            }
        case 'PERRO_ID':
            return {
                ...state,
                dog: action.payload
            }
        case 'PERRO_ID_RESET':
            return {
                ...state,
                dog: {}
            }
        case 'POST_DOG':
            console.log('ok')
            return state
        default:
            return state
    }
}