import axios from 'axios'
import {useState} from "react" 
import {useSelector} from "react-redux"
// import {url} from "../slices/api"

function PayButton({currentUser}) {
    const [message, setMessage] = useState(false)

    const cartItems = [{
        name: 'The Expendables',
        descr: 'Mercenaries for good who are easily expendable for whoever hires them.',
        price: 5000,
        cartQuantity: 2
    }]

    const handleCheckout = () => {
    if(!currentUser){ 
        setMessage(true)
    } else {
        console.log('checkout begins', cartItems)
        console.log('checkout user', currentUser)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/stripe/create-checkout-session`, {
            cartItems, 
            userId: currentUser._id
        }).then((res) => {
            if(res.data.url){
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