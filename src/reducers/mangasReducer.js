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
            let newMangas = [...state.mangas]
            let manga = newMangas.find(manga => manga.id === action.payload.id)
            manga.listed = action.payload.listed
            newMangas[manga.id - 1] = manga

            // debugger
            // newManga[action.payload]

            return {
                ...state,
                mangas: newMangas
            }
        default:
            return state
    }
}

export default mangasReducer