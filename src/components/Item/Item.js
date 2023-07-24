import {Link} from 'react-router-dom'
import './Item.css'

const Item =({id, name, img, price, stock}) => {

    return (
        <div className='cardProducto'>
        <article >
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img className='imgProducto' src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver Detalle</Link> 
            </footer>
        </article>
        </div>
    )
}

export default Item