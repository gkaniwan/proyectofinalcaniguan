import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item, quantity}) => {
    const {clearCart} = useContext(CartContext);
    console.log(item);
    return (
        <div className='cardProducto'>
            <h4> {item.name } </h4>
            <img src={item.img} alt={item.name} className='imgProducto'/>
            <p> Cantidad: {quantity} </p>
            <p> Precio: {item.price} </p>
            <button onClick={()=> clearCart(item.id)} > Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem