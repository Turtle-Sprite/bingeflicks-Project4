import axios from 'axios'
import {useSelector} from "react-redux"
// import {url} from "../slices/api"

function PayButton({cartItems}) {

    const handleCheckout = () => {
        axios.post(`${url}/stripe/create-checkout-session`, {
            cartItems, 
            userId: user._id
        }).then((res) => {
            if(res.dataa.url){
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message) )
    }

    return ( 
        <>
            <button onClick={() => handleCheckout()}>Check out</button>
        </>
     );
}

export default PayButton;