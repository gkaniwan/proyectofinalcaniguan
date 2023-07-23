import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CartContext);


    return (
        <div>
            <h4> {item.name } </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.price} </p>
            <button onClick={()=> eliminarProducto(item.id)} > Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem