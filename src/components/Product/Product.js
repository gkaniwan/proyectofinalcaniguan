import { useState, useEffect } from 'react'
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore"
import { db } from "../../services/config";

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {

        const myProduct = query(collection(db, "inventario"));

        // const myProduct = query(collection(db, "inventario"), where("price","<",10000));

        getDocs(myProduct)
            .then(response => {
                setProduct(response.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            .catch(error => console.log(error))
    },[product])

    const descountStock = async(prod) => {
        const productRef = doc(db,"inventario",prod.id);
        const newStock = prod.stock - 1;

        await updateDoc(productRef, {stock: newStock});
    }

    return (
        <>
            <h2>Produtos</h2>
            <div>
                {
                    product.map(prod => (
                        <div key={prod.id} >
                            <h2>{prod.name}</h2>
                            <picture>
                                <img className='imgProducto' src={prod.img} alt={prod.name}/>
                            </picture>
                            <p>Precio : $ {prod.price}</p>
                            <p>Cantidad : $ {prod.stock}</p>
                            <button onClick={() => descountStock(prod)}>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Product