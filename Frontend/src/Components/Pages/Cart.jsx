import PayButton from '../../Components/partials/PayButton'

//inherits from app.js
function Cart({currentUser, cart, setCart, handleAddToCart}) {


    return ( 
        <>
            <div className='cart-container'>

                <PayButton cartItem = {cart} currentUser={currentUser} />
            </div>
        </>
     );
}

export default Cart;
