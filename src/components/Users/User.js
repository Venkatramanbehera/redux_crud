import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUser } from '../../actions/userAction'

const User = (props) => {

    const dispatch = useDispatch()

    const users = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        // dispatch call
        dispatch(startGetUser())
    },[])

    return (
        <div>
            <h1>Listing Users - {users.length} </h1>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>{user.username}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default User
