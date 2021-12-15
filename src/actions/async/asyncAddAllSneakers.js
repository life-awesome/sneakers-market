export const ADD_ALL_SNEAKERS = 'ADD_ALL_SNEAKERS'
const addAllSneakers = (payload) => ({type : ADD_ALL_SNEAKERS, payload})

export const fetchSneakers = () => {
    return function (dispatch) {
        fetch('https://61b5c91a0e84b70017331bd2.mockapi.io/sneakers')
            .then(response => response.json())
            .then(json => dispatch(addAllSneakers(json)))
    }
}
