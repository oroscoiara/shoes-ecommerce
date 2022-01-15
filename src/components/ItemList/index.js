//mapeo de los productos y devuleve un item por cada uno

import Item from '../Item/item';
import '../ItemList/styles.css';
import Row from 'react-bootstrap/esm/Row'

//le mando props, recibe props items entre los ({})
//recibe los items de afuera

const ItemList = ({items}) => { 
    return (
        <>
        <Row md={6}>
            {items.map((item) =>  {
                return <Item key={item.id} item={item} />
            })}
        </Row>
        </>
        
        ); 
        
}

export default ItemList;
//aun no tengo los items, tengo que mapearlos. No tengo ese algo, necesito hacer la promesa