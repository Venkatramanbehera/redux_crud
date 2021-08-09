
export const addNumber = (randomNumber) => {
    return {
        type : "ADD_NUMBER",
        payload : randomNumber
    }
}

export const plusTwo = () => {
    return {
        type : "PLUS_TWO"
    }
}

export const remove = () => {
    return {
        type : "REMOVE"
    }
}

export const decrementById = (id) => {
    return {
        type : "DECREMENT_BY_ID",
        payload : id
    }
}

export const incrementById = (id) => {
    return {
        type : "INCREMENT_BY_ID",
        payload : id
    }
}

export const removeNumber = (id) => {
    return {
        type : "REMOVE_NUMBER",
        payload : id
    }
}

