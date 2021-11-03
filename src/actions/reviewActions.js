export const createReview = (e, state) => {
    e.preventDefault()
    {debugger}
    const data = {
        written_review: state.reviewText,
        manga_id: state.manga.id
    }

    return (dispatch) => {
        fetch (`http://127.0.0.1:3000/reviews`, {
            method:'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({ type: 'ADD_REVIEW', payload: respJSON})
        })
    }
}

export const patchReview = (e, state) => {
    e.preventDefault()
    {debugger}
    const data = {
        written_review: state.reviewText,
        id: state.manga.reviews[0].id
    }

    return (dispatch) => {
        fetch (`http://127.0.0.1:3000/reviews/${state.manga.reviews[0].id}`, {
            method:'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({ type: 'ADD_REVIEW', payload: respJSON})
        })
    }

}