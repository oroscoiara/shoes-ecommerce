import {useState} from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

const ItemCount = ({stock, onAdd}) => {
    const initial = 1;
    const [count, setCount] = useState(initial);
   // const [display, setDisplay] = useState('hidden');
//initial x1?
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
            <Button onClick={handleClickRemove} variant="primary">-</Button>
            <Button disabled variant="primary">{count}</Button>
            <Button onClick={handleClickAdd} variant="primary">+</Button>
        </ButtonGroup>
        <br></br>

        <Button onClick={handleOnAdd} variant="primary"> Agregar al carrito! </Button>
    </>
       )

    }

export default ItemCount;