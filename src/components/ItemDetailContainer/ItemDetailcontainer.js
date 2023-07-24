import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../services/config';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        const newDoc = doc(db, "inventario", itemId);
        
        getDoc(newDoc)
        .then(res => {
            const data = res.data();
            const newProduct = {id: res.id, ...data};
            setProduct(newProduct);
            })
        .catch(error => console.log(error));

    },[itemId])

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer


