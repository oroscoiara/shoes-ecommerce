import { Spinner} from "react-bootstrap";
import { Row, Container } from "react-bootstrap";


const Loader = () => {
    return (
        <Container>
        <Row className="jutify-content-center mt-4 mb-4">
            <Spinner animation="border" variant="secondary" />
            <h2 className="text-center">Cargando...</h2>
        </Row>
        </Container>
    )
}


export default Loader