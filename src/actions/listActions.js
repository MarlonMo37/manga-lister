export const patchManga = (manga) => {
    
    let changeList = ""
    // e.preventDefault()
    if (manga.listed === false) {
        changeList = true
    } else {
        changeList = false
    }
    
    const data = {
        listed: changeList,
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