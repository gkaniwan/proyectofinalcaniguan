import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
}) 

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart)

    const addItem = (item, quantity) => {
        const itemExist = cart.find(prod => prod.item.id === item.id);
        
        if(!itemExist){
            setCart(prev => [...prev, {item, quantity}]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }else{
            const cartUpdate = cart.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, quantity: prod.quantity + quantity};
        }else{
                    return prod;
                }
            });
            setCart(cartUpdate);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => (item.price * quantity));
        }
    }

    const removeItem = (itemId) => {
        const itemRemove = cart.find( prod => prod.item.id === itemId);
        const cartUpdate = cart.filter(prod => prod.item.id !== itemId)
        setCart(cartUpdate);
        setTotalQuantity(prev => prev - itemRemove.quantity);
        setTotal(prev => prev - (itemRemove.item.price * itemRemove.quantity));
    }
    
    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>

    )
}

