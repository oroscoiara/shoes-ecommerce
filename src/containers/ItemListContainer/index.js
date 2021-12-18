//llamado a la api, o por ahora la promesa.
//manejo de estado
//acá traemos un ItemList que va a mapear Items y devolverlos como lista
//en el return
import { useEffect, useState } from "react";
import MockedItems from "../../components/Mock/MockedItems";
import ItemList from "../../components/ItemList/index";
import "../ItemListContainer/styles.css"

const ItemListContainer = () => {

    //promesa
    const [items, setItems] = useState([]); //necesitamos un estado xq simulamos que esto lo traemos de una Api (ahora es MockedItems)
    //cuando venga de api, los guardaremos en un array y seràun estado xq lo usaremos en varios lugares .
    //con props lo podemos pasar a otros lados a través de items. 
    //Ese items, será el array del MockedItems. Necesitamos el effect para que no se haga repetidas veces la promesa.
    useEffect(() => {
        //promesa que en resolve tira el array de prod
        const itemPromise = new Promise((res, rej) => {
            setTimeout(()=> {
                res(MockedItems);
            },2000);
        });
        itemPromise.then((res) => setItems(res));
    }, [items]); //acá el efecto estará escuchando el cambio de estado. Sólo rerenderiza si se modif items.
    return <ItemList  items={items} />;//este item list tendrá un valor, que será items.
    
};

export default ItemListContainer;