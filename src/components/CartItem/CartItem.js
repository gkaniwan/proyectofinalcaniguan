import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item, totalQuantity}) => {
    const {clearCart} = useContext(CartContext);

    return (
        <div>
            <h4> {item.name } </h4>
            <p> Cantidad: {totalQuantity} </p>
            <p> Precio: {item.price} </p>
            <button onClick={()=> clearCart(item.id)} > Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem