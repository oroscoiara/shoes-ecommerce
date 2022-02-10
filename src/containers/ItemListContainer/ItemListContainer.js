//llamado a la api, o por ahora la promesa.
//manejo de estado
//acá traemos un ItemList que va a mapear Items y devolverlos como lista
//en el return
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/index"
import { useParams } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";
import { getFirestore } from "../../components/Firebase/firebase";
import Loader from '../../components/Loader/Loader';


const ItemListContainer = () => {

    //promesa
    const [items, setItems] = useState([]); //necesitamos un estado xq simulamos que esto lo traemos de una Api (ahora es MockedItems)
    //cuando venga de api, los guardaremos en un array y seràun estado xq lo usaremos en varios lugares .
    //con props lo podemos pasar a otros lados a través de items. 
    //Ese items, será el array del MockedItems. Necesitamos el effect para que no se haga repetidas veces la promesa.
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();
    
    useEffect(() => {

        const bd = getFirestore();
        const itemsCollection = bd.collection('items');
        itemsCollection.get().then((value) => {
            let datos = value.docs.map((e) => {
                return {...e.data(),id: e.id};
            });
            const datosFiltrados = catId 
            ? datos.filter ((item) => item.categoryId === catId)
            : datos;
            setItems(datosFiltrados);
        });
        setLoading(false);
    },[catId]);

        /*promesa que en resolve tira el array de prod
        setLoading(true)
        const itemPromise = new Promise((res, rej) => {
            setTimeout(()=> {
                const myData = catId 
                ? MockedItems.filter((item) => item.categoryId === catId) : MockedItems;

                res(myData)},1000);
        });
        itemPromise
        .then((res) => {
            setItems(res)})
        .finally(()=> setLoading(false));
    }, [catId]); //acá el efecto estará escuchando el cambio de estado. Sólo rerenderiza si se modif items.
    */

    
    
    return (
        
        loading ? (<Loader/> ) : (
        <Container>
            <Row>
                <Col md="auto">
                    <ItemList  items={items} /> 
                </Col>
            </Row>
        </Container>
       ) ) 
}
export default ItemListContainer;