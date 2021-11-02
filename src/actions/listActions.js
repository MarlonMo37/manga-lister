export const patchManga = (manga) => {
    
    // e.preventDefault()
    
    const data = {
        listed: manga.listed,
        id: manga.id 
    }
    debugger

    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/mangas/${manga.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({ type: 'CHANGE_LISTING', payload: respJSON })
        })
    }
}