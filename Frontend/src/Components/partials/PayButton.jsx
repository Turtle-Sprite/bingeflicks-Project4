import axios from 'axios'
import { useState } from "react"

function PayButton({ currentUser, cartProducts }) {
    const [message, setMessage] = useState(false)

     const handleCheckout = async () => {
        try {
            if (!currentUser) {
                setMessage(true)
            } else {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/stripe/create-checkout-session`, {
                    cartProducts,
                    userId: currentUser._id
                })
                if (response.data.url) {
                    window.location.href = response.data.url
                }
            }
        } catch (err) {
            console.warn(err)
        }
    }

    return (
        <>
            {message ?
                <p className="error"> You must be logged in to your account to checkout. </p> :
                null
            }
            <button type="submit" onClick={() => handleCheckout()}>Check out</button>
        </>
    );
}

export default PayButton;