export const fetchGenres = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_GENRES'})
      fetch('http://127.0.0.1:3000/genres').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_GENRES', genres: responseJSON })
      })
    }
}