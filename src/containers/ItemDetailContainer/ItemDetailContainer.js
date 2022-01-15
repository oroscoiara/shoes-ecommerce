import React from 'react';
import {useState, useEffect} from 'react';
import MockedItems from '../../components/Mock/MockedItems';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useEffect(true);
    
    const itemId  = useParams();
    console.log(itemId);

    useEffect(() => {
        
        const itemPromise = new Promise((res) => {
            setTimeout(() => {
                const myData = MockedItems.find( (item) => item.id === itemId);
                res(myData);
            }, 1500);
            });
            itemPromise
            .then((res) => {
                setProduct(res)
            })

            .finally(() => setLoading(false))
        }, [itemId]);

        console.log(product);
        
        return (<ItemDetail item={product} />);
    
};

export default ItemDetailContainer;