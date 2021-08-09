import axios from "axios"

export const startGetUser = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                dispatch(setUser(users))
            })
            .catch((err) => {
                console.log(err);
            })
        // setTimeout(() => {
        //     dispatch({ type: "SET_USERS", payload : ['chi','mi']})
        // }, [])
    }
}

export const setUser = (users) => {
    return {
        type : "SET_USERS",
        payload : users
    }
}