import { useEffect, useState } from "react";
import MockedCategories from "../../components/Mock/MockedCategories";
import CategoryList from "../../components/CategoryList/CategoryList";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import  Container from "react-bootstrap/esm/Container";
import {useParams} from 'react-router-dom';

const CategoryListContainer = () => {
    const [items, setItems] = useEffect([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        const categoryItemPromise= new Promise((res, rej) => {
            res(MockedCategories);
        })

        categoryItemPromise
        .then((res) => setItems(res))
        .finally(() => setLoading(false))
    },1000)
},[items]);

return(
    loading ? <h1>Cargando...</h1> : 
    <Container>
        <Row>
            <Col md='auto'>
                <CategoryList categoryItems={items} />
            </Col>
        </Row>
    </Container>
)}

export default CategoryListContainer;