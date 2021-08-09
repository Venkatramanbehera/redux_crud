const initialNumberValue = []

const numberReducer = (state=initialNumberValue,action) => {
    switch(action.type){
        case 'ADD_NUMBER': {
            return [...state, {...action.payload} ]
        }
        case 'PLUS_TWO' : {
            const result = state.map((ele) => {
                return {
                    ...ele,
                    value : ele.value + 2
                }
            })
            return result
        }
        case 'REMOVE' : {
            return initialNumberValue
        }
        case 'DECREMENT_BY_ID' : {
            return state.map((ele) => {
                if(ele.id === action.payload){
                    return {
                        ...ele,
                        value : ele.value - 1
                    }
                }else{
                    return {...ele}
                }
            })
        }
        case 'INCREMENT_BY_ID' : {
            return state.map((ele) => {
                if(ele.id === action.payload){
                    return {
                        ...ele,
                        value : ele.value + 1
                    }
                }else{
                    return {...ele}
                }
            })
        }
        case 'REMOVE_NUMBER' : {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }
        
        default : {
            return [...state]
        }
    }
}

export default numberReducer