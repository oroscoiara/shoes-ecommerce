import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Button} from 'bootstrap';
import useCartContext from "../../context/CartContext";
import {
  collection,
  getFirestore,
} from "firebase/firestore";
import "./Order.css";

const inputs = [
  {
    label: "Nombre completo",
    name: "nombre",
  },
  {
    label: "Celular",
    name: "celular",
  },
  {
    label: "Mail",
    name: "mail",
  },
];

const Order = () => {
  const { Cart, cartTotal, clear } = useCartContext();

  const [buyer, setBuyer] = useState({
    nombre: "",
    celular: "",
    mail: "",
  });

  const onChange = (event) => {
    setBuyer({ ...buyer, [event.target.name]: event.target.value });
  };
  const ordenConfirmada = () => {
    const order = {
      buyer,
      items: Cart,
      total: cartTotal(),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");


  };

  return (
    <>
      {Cart.length === 0 ? (
        <div>
          <h1>¿Querés seguir comprando?</h1>
          <Button
            class="buttonVolveraComprar"
            style={{
              marginTop: "20px",
            }}
          >
            <Link to="/">Volver al catálogo</Link>
          </Button>
        </div>
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            <h1>
              ¿Querés modificar tu compra?
            </h1>
            <Button
              class="buttonVolveraComprar"
              style={{
                marginRight: "15px",
                marginTop: "15px",
              }}
            >
              <Link to="/">VOLVER AL HOME</Link>
            </Button>
            <Button class="buttonVolveraComprar">
              <Link to="/cart">VOLVER AL CARRITO</Link>
            </Button>
          </div>
          <div>
            <h1>
                Completa tus datos para terminar la compra
            </h1>
            <h1>
                {inputs.map(({ name, label }) => (
                  <h1
                    key={name}
                    value={buyer[name]}
                    variant="outlined"
                    name={name}
                    onChange={onChange}
                    label={label}
                    fullWidth
                    style={{ marginBottom: "1em" }}
                  />
                ))}
           </h1>
            <Button
              class="buttonVolveraComprar"
              onClick={() => ordenConfirmada()}
              style={{
                color: "white",
                backgroundColor: "rgb(14, 20, 57)",
                borderRadius: "10px",
              }}
              size="large"
              variant="contained"
              color="primary"
              disabled={!(buyer.nombre && buyer.celular && buyer.mail)}
            >
              FINALIZAR COMPRA
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Order;