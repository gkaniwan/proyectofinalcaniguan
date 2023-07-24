import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/config';


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const myProduct = categoryId ? query(collection(db, "inventario"), where ("category", "==",categoryId)) : collection(db,"inventario");

      getDocs(myProduct)
      .then(response => {
        const nuevosProductos = response.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
      })
        setProducts(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [categoryId])

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer