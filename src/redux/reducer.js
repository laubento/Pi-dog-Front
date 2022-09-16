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
            
    }
}