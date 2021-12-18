//acá va la card del producto

const Item = ({item}) =>(
    <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <p>{item.pictureURL}</p>

    </div>

);

export default Item;