import PayButton from '../../Components/partials/PayButton'


function Cart() {
    return ( 
        <>
            <PayButton cartItem = {cart.cartItems} />
        </>
     );
}

export default Cart;