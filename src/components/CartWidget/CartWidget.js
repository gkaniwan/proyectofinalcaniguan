import cart from './assets/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <div>
        <Link to='/cart' style={{ display : totalQuantity > 0 ? 'block' : 'none'}}>
                <img src={cart} alt='cart-widget' height={30} width={30} />
            { 
                totalQuantity > 0 && <strong>{ totalQuantity } </strong>
            }
        </Link>
        </div>
    )
}

export default CartWidget