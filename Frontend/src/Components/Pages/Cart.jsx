import { Container } from 'react-bootstrap';
import PayButton from '../../Components/partials/PayButton'
import { AiFillDelete  } from "react-icons/ai";
//inherits from app.js
function Cart({ currentUser, cartProducts, handleAddToCart, handleDeleteFromCart }) {

    let cartProductsMap = cartProducts.map((product) => {
        return (
            <div className='p-3 m-2 rounded-sm shadow-lg'>
                <div className='product-name'>
                    <h3 className="m-2" >{product.title}</h3>
                </div>
                <div className='product-price'>
                    <h3 className="m-1">{product.price}</h3>
                </div>
                <div className='product-description'>
                    <p className="m-1">{product.overview}</p>
                </div>
                <div className='flexContainer'>
                <AiFillDelete onClick={() => handleDeleteFromCart(product)} className='iconbig'/>
                </div>
            </div>
        )
    })

    return (
        <>
        <Container>
            <div className='mt-5 ml-8 p-2 products items-center rounded-sm'>
                    {cartProductsMap}

                <PayButton cartProducts={cartProducts} currentUser={currentUser} />
            </div>
            </Container>
        </>
    );
}

export default Cart;
