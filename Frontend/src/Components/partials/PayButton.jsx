import axios from 'axios'
import {useState} from "react" 
import {useSelector} from "react-redux"
// import {url} from "../slices/api"

function PayButton({cartItems, currentUser}) {
    const [message, setMessage] = useState(false)

    const handleCheckout = () => {
    if(!currentUser){ 
        setMessage(true)
    } else {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/stripe/create-checkout-session`, {
            cartItems, 
            userId: currentUser._id
        }).then((res) => {
            if(res.dataa.url){
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message) )
    }
}

    return ( 
        <>
            {message ? 
            <p className="errorMsg"> You must be logged in to your account to checkout. </p> :
            null
            }
            <button onClick={() => handleCheckout()}>Check out</button>
        </>
     );
}

export default PayButton;