import React, {useState} from 'react';
import { getFirestore } from '../Firebase/firebase';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const initialState = {
    name:"",
    phone:"",
    email:"",
    email2:"",
};

const PaymentForm = ({clearCart, total, cart}) => {
    const [formData, setFormData] = useState(initialState);
    const db= getFirestore();
    const orders= db.collection("orders");

    function handleSubmit(e){
        e.preventDefault();

        const orderDetail = cart.map((i) => `${i.item.title}: ${i.quantuty}`);
        const date = new Date();

        const newOrder = {
            date: date,
            buyer: formData,
            item: orderDetail,
            total: total,
        };

        orders
        .add(newOrder)
        .then((response) => alert(`Su nº de compra es: ${response.id}`))
        .then(setFormData(initialState))
        .catch((error) => console.log(error))
        .finally(() =>
        {
            clearCart();
            console.log(newOrder);
        });
    }

function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value,
    });
}

return(
    <Form onChange={handleChange} onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Nombre y Apellido" className="mb-3">
            <Form.Control required name='name' id='name' type='text' placeholder='name/surname' />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
            <Form.Control required name='email' id='email' type='email' placeholder='name@gmail.com' />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Por favor, repita su email" className="mb-3">
            <Form.Control required name='email2' id='email2' type='email' placeholder='name@gmail.com' />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Celular" className="mb-3">
            <Form.Control required name='calular' id='celular' type='text' placeholder='(011)1123343235' />
        </FloatingLabel>
        <div className="d-grid gap-2">
            {formData.email === formData.email2 ? (
                <Button variant="dark" type="submit" size="md"> 
                Comprar
                </Button>) : (
                <Button variant="dark" type="submit" size="md">
                Por favor, corriga sus datos
                </Button>
                )}
            </div>
    </Form>
);
}

export default PaymentForm;