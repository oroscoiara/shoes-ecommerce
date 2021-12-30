import {Link} from 'react-router-dom';

//acá va la card del producto

const Item = ({item}) =>(
    <Link classname="linkCardProduct" to = {`/product/${item.id}`}>
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.pictureURL}</p>

        </div>
    </Link>

);

export default Item;