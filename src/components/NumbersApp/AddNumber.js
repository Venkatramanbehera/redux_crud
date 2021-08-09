import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../../actions/numbersAction'

const AddNumber = (props) => {
    const [ number, setNumber ] = useState('')

    const handleChange = (e) => {
        setNumber(e.target.value)
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const num = {
            id : Number(new Date()),
            value : Number(number)
        }
        dispatch(addNumber(num))
        setNumber('')
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" value={ number } onChange={ handleChange} />
            </form>
        </div>
    )
}

export default AddNumber
