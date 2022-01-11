import React from 'react';
import {useState, useEffect} from 'react';
import MockedItems from '../../components/Mock/MockedItems';
import { useParams } from 'react-router';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = (() => {
    console.log(MockedItems);
    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    console.log(itemId);

    useEffect(() => {
        setLoading(true)
        const itemPromise = new Promise((res, rej) => {
            setTimeout(() => {
                const myData = MockedItems.find((item) => item.id === itemId);
                res(myData)}, 2000)
            })
            itemPromise.then((res) => {
                setProduct(res)
            })

            .finally(() => setLoading(false))
        }, [itemId]);

        console.log(product)
        
        return loading ? <h2> Cargando..</h2> : <ItemDetail item={product} />
    
})

export default ItemDetailContainer;