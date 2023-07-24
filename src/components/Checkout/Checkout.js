import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { cart , clearCart, totalQuantity } = useContext(CartContext); 

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if(!name || !lastname || !phone || !email || !emailConfirmation ){
            setError("Por Favor , completar todos los campos");
            return;
        }

        if(email !== emailConfirmation){
            setError("Los Campos del Email no coinciden");
            return;
        }

        const orden = {
            items: cart.map( prod => ({
                id: prod.item.id,
                name: prod.item.name,
                quantity: prod.quantity
            })),
            total: totalQuantity,
            name,
            lastname,
            phone,
            email
        };

        addDoc(collection(db,"ordenes"), orden)
            .then(docRef => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch(error => {
                console.log(error)
                setError("Se produjo un error");
            })
    }

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            { cart.map(prod => (
                    <div key={prod.id}>
                        <p>
                            {prod.item.name} x {prod.quantity}
                        </p>
                        <p>Precio $ {prod.item.price}</p>
                        <hr />
                    </div>
                ))}
                <hr />
                    <div>
                        <label htmlFor="name">Nombre </label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Apellido </label>
                        <input type="text" id="lastName" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone">Telefono </label>
                        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email </label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="emailconfirmar">Email confirmacion </label>
                        <input type="text" id="emailconfirmar" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                    </div>

                    {
                        error && <p style={{color:"red"}}> {error} </p>
                    }

                    <button type="submit">Finalizar Compra</button>
        </form>
        {
            orderId && (
                <strong> Gracias por tu compra, numero de Orden {orderId} </strong>
            )
        }
    </div>
  )
}

export default Checkout