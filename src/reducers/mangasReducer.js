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

            return {
                ...state,
                mangas: newMangas
            }
        case 'ADD_REVIEW':
            let changedMangas = [...state.mangas]
            let selected_manga = state.mangas.find(manga => manga.id === action.payload.manga.id)
            selected_manga.reviews[0] = action.payload
            changedMangas[selected_manga.id - 1] = selected_manga

            return {
                ...state,
                mangas: changedMangas
                
            }
        default:
            return state
    }
}

export default mangasReducer