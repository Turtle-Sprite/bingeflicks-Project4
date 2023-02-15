import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Form, Col, Row, Container } from 'react-bootstrap';


export default function Login({ currentUser, setCurrentUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // submit event handler for login
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            // post fortm data to the backend
            const reqBody = {
                email,
                password
            }
            console.log("axios", reqBody)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, reqBody)

            // save the token in localstorage
            const { token } = response.data
            localStorage.setItem('jwt', token)

            // decode the token
            const decoded = jwt_decode(token)

            // set the user in App's state to be the decoded token
            setCurrentUser(decoded)

        } catch (err) {
            console.warn(err)
            if (err.response) {
                // setMsg(err.response.data.msg)
            }
        }
    }

    return (
        <Container>
            <Col sm={12} md={6} lg={5}>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email} />
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password} />
                <button type="submit"> Login </button>
            </Form>
                </Col>
        </Container>
    )
}