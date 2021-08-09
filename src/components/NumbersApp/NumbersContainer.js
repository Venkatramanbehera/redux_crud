import React from 'react'
import { useSelector } from 'react-redux'
import AddNumber from './AddNumber'
import NumbersControl from './NumbersControl'
import NumbersList from './NumbersList'

const NumbersContainer = (props) => {

    const numbers = useSelector((state) => {
        return state.numbers
    })

    const findSum = () => {
        let result = 0
        numbers.forEach((ele) => {
            result += ele.value
        })
        return result
    }
    return (
        <div>
            <h2>Listing -{ numbers.length} , sum - { findSum() } </h2>
            <NumbersList/>
            <NumbersControl/>
            <AddNumber/>
        </div>
    )
}

export default NumbersContainer
