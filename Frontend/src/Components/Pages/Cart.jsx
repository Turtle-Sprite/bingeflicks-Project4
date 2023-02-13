import PayButton from '../../Components/partials/PayButton'


function Cart({currentUser, cart, setCart}) {
    return ( 
        <>
            <PayButton cartItem = {cart} currentUser={currentUser} />
        </>
     );
}

export default Cart;