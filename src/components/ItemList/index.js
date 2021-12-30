//mapeo de los productos y devuleve un item por cada uno

import Item from '../Item/item';
import '../ItemList/styles.css'

//le mando props, recibe props items entre los ({})


const ItemList = ({items}) => { //recibe los items de afuera
    return (
        <>
        <section className="flex-row">
        {items.map((item) => {
            return <Item key={item.id} item={item}/>;
            })} 
        </section>
        </>

        ); 
        
};

export default ItemList;
//aun no tengo los items, tengo que mapearlos. No tengo ese algo, necesito hacer la promesa