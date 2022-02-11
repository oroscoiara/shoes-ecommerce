import React from 'react';
import { Container, Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import'./ItemDetail.css';
import Cart from '../Cart/Cart';

//Tarjeta del item, renderizada por ItemDetailContainer.
//Recibe la información por pros, renderiza ItemCount.
//Si agregamos un producto, se agrega al CartContext -> el item recibe se recibe del itemDetailContainer y la cantidad, del ItemCount
const ItemDetail = (( {item}) => {


    const {setCart, addItem} = useCartContext();

    const onAdd = (count) => {
        setCart(count);
        addItem(item,count);
    }


    return (
        <Container>
            <Card className="cardItemDelatail" >
                <Card.Img variant="top" src={item.pictureURL} className="pictureItemDetail" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <hr />
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text>Stock disponible: {item.stock}</Card.Text>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </Card.Body>
            </Card>
        </Container>

);
})

       
export default ItemDetail;
         /*
           <>
                <div className='card d-flex justify-content-center flex-sm-column flex-md-column flex-lg-row p-3 gap-3'>
                    <div className="my-auto " >
                        <img src={item.pictureURL} className='itemDetPic' position="relative" height="250px" width="250px" border="1px black"/>
                    </div>
                    <div className="my-auto itemDetContainer" position="relative" height="250px">
                        <h3 >{item.title}</h3>
                        <p>$ {item.price}</p>
                        <p>Categoría: {item.category}</p>
                        <p>Stock Disponible:{item.stock}</p>
                    </div>
                    </div>
                    <div className="p-3 gap-2">
            <ItemCount stock={item.stock} onAdd={onAdd}/>
                     </div>

</>*/
