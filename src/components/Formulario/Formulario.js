import { useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"


const Formulario = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const handlerForm = (e) => {
        e.preventDefault();

        addDoc(collection(db, "users"),{
            name: name,
            lastName: lastName,
            phone: phone
        })

        setName("");
        setLastName("");
        setPhone("");
    }

  return (
    <form onSubmit={handlerForm}>
        <h2>Formulario contacto</h2>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="lastName">Apellido</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="phone">Telefono</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario