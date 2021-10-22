import uuid from "uuid" 

const mangasReducer = (state = {}, action) {
    switch(action.type) {
        case 'LOADING_MANGAS':
            return {
                ...state,
                mangas: [...state.mangas],
                loading: true
            }
        case 'ADD_MANGAS':
            return {
                ...state,
                mangas: action.mangas, 
                loading: false
            }
        default:
            return state
    }
}

export default mangasReducer