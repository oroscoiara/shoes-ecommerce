import {useState} from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import './itemCount.css'
const ItemCount = ({stock, onAdd}) => {
    const initial = 1;
    const [count, setCount] = useState(initial);
   // const [display, setDisplay] = useState('hidden');
//Se renderiza en itemDetail. Recibe por props stock del item, valor inicial del counter y envìa la cant seleccionada a ItemDetail.
//Permite agregar o quitar cantidades del producto. Si excede el stock, no se podrá seguir sumando del producto.
    const handleClickAdd = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    }

    const handleClickRemove  = () => {
        count === initial ? setCount(initial) : setCount(count - 1)
    }

    const handleOnAdd = () => {
        onAdd(count);
        setCount(initial);
    }
    

    return (
        <>
        <ButtonGroup>
            <Button onClick={handleClickRemove} variant="dark">-</Button>
            <Button disabled variant="dark">{count}</Button>
            <Button onClick={handleClickAdd} variant="dark">+</Button>
        </ButtonGroup>
        <br></br>

        <Button onClick={handleOnAdd} variant="dark"> Agregar al carrito! </Button>
    </>
       )

    }


export default ItemCount;