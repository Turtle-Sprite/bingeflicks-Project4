import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'


export default function Register({ currentUser, setCurrentUser }) {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post form data to the backend
			const reqBody = {
				fname,
				lname,
				email,
				password
			}
			const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, reqBody)

			// save the token in localstorage
			const { token } = response.data
			localStorage.setItem('jwt', token)

			// decode the token
			const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
            //specific error msg
            console.log(err.response.data)
			if (err.response) {
				// setMsg(err.response.data)
			}
		}
	}
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            onChange={e => setFName(e.target.value)}
            value={fname}/>
            <input 
            type="text" 
            onChange={e => setLName(e.target.value)}
            value={lname}/>

            <input 
            type="email" 
            onChange={e => setEmail(e.target.value)}
            value={email}/>

            <input 
            type="password" 
            onChange={e => setPassword(e.target.value)}
            value={password}/>
            <button type="submit"> Sign Up </button>
        </form>
        </>

    )
}