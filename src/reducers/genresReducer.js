// import uuid from "uuid" 

const genreReducer = (state = { genres: [], genre_loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_GENRES':
            return {
                ...state,
                genres: [...state.genres],
                genre_loading: true
            }
        case 'ADD_GENRES':
            return {
                ...state,
                genres: action.genres, 
                genre_loading: false
            }
        default:
            return state
    }
}

export default genreReducer