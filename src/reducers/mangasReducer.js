// import uuid from "uuid" 

const mangasReducer = (state = { mangas: [], manga_loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_MANGAS':
            return {
                ...state,
                mangas: [...state.mangas],
                manga_loading: true
            }
        case 'ADD_MANGAS':
            return {
                ...state,
                mangas: action.mangas, 
                manga_loading: false
            }
        case 'CHANGE_LISTING':
            const newManga = [...state.mangas]
            return {
                ...state,
                mangas: newManga
            }
        default:
            return state
    }
}

export default mangasReducer