//makes http request and sends user data back
import axios from 'axios'

const API_URL = `${process.env.REACT_APP_SERVER_URL}/users/login`

//Register user
const register = async (userData) => {
    const response = await axios.port(API_URL, userData)
    //if we get a response from our server/API with userData/JWT, set it in local storage/log user in
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService ={
    register
}

export default authService