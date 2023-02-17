import PayButton from '../../Components/partials/PayButton'

//inherits from app.js
function Cart({currentUser, cartProducts, handleAddToCart, handleDeleteFromCart}) {


    return ( 
        <>
            <div className='cart-container'>

                <PayButton cartProducts = {cartProducts} currentUser={currentUser} />
            </div>
        </>
     );
}

export default Cart;
