import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <div className='cardProducto'>
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                    <img src={img} alt={name} className='imgProducto'/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' >Terminar Compra</Link>
                    ) : (
                        <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
        </div>
    )
    
}

export default ItemDetail
