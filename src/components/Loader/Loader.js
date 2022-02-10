import { Spinner} from "react-bootstrap";


export default function Loader ({padTop}) {
    return (
        <div style={{paddingTop: padTop ? "35vh":"1vh"}}>
            <Spinner animation="border" variant="secondary" />
        </div>
    )}