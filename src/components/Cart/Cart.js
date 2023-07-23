import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to='/checkout'>Pagar</Link>
        </div>
    )
}

export default Cart