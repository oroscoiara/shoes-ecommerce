import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

//en el provider puedo crear funciones, se suscriben y de ahì toman todo lo que necesito acceder

export const CartContextProvider = ({children}) => {
    let variable = "context";
    const [cart, setCart] = useState([]); //creo estado para que lo puedan acceder, use state con array


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
//con esto suscribo a los componentes
//envuelvo y uso prop Children p que puedan usarla, en la linea 9 tmb.
        <CartContext.Provider
            value = {{ //doble llave, lo que tiene dentro, es objeto. Estos values los tengo por ej llamados en CartWidget
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