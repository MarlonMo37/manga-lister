export const fetchMangas = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_MANGAS'})
      fetch('http://127.0.0.1:3000/mangas').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_MANGAS', mangas: responseJSON })
      })
    }
}