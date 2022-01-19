import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    let variable = "context";
    const [cart, setCart] = useState([]);


    const addItem = (item, quantity) => {
        const index = cart.findIndex((i) => i.item.id === item.id);
        if (index > -1) {
            const oldQy = cart[index].quantity;
            cart.splice(index,1);
            setCart([...cart, { item, quantity: quantity + oldQy}]);

        } else {
            setCart([...cart, {item, quantity}]);
        }
    };

        const clearCart = () => {
            setCart([]);
        };
        
        const removeItem = (id) => {
            const deleteProduct = cart.filter((prod) => prod.item.id !== id );
            setCart([...deleteProduct]);
        };

        const cartWidgetItems = () => {
            return cart.reduce((acum, valor) => acum + valor.quantity, 0);

        };

        const totalPrice =() => {
            return cart.reduce(
                (acum, valor) => acum + valor.quantity * valor.item.price, 0
            );

        };
     return(

        <CartContext.Provider
            value = {{
            variable,
            cart,
            setCart,
            addItem,
            clearCart,
            removeItem,
            cartWidgetItems,
            totalPrice,
        }}
        >
            {children}
            
        </CartContext.Provider>
     );
    };