import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementById,incrementById, removeNumber } from '../../actions/numbersAction'

const NumbersList = (props) => {
    const dispatch = useDispatch()
    const numbers = useSelector((state) => {
        return state.numbers
    })

    const handleDecrement = (id) => {
        dispatch(decrementById(id))
    }

    const handleIncrement = (id) => {
        dispatch(incrementById(id))
    }

    const handleRemove = (id) => {
        dispatch(removeNumber(id))
    }

    return (
        <div>
            <h1>Numbers List </h1>
            <ul>
                {
                    numbers.map((ele) => {
                        return (
                            <li key={ele.id}>{ele.value} 
                            <button onClick={() => handleDecrement(ele.id) }>-</button>
                            <button onClick={() => handleIncrement(ele.id) }>+</button>
                            <button onClick={() => handleRemove(ele.id) }>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NumbersList
