import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Form, Col, Row, Container } from 'react-bootstrap';


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
            <div className='mx-auto'>
                <Container>
                    <Col sm={12} md={6} lg={5}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={e => setFName(e.target.value)}
                                        value={fname} />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={e => setLName(e.target.value)}
                                        value={lname} />
                                </Col>
                            </Row>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email} />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password} />
                            <button className="mt-3" type="submit"> Sign Up </button>
                        </Form>
                    </Col>
                </Container>
            </div>
        </>

    )
}