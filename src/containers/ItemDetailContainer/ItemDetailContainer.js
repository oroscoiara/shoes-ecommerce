import React from 'react';
import {useState, useEffect} from 'react';
import MockedItems from '../../components/Mock/MockedItems';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getFirestore } from '../../components/Firebase/firebase';
import Loader from '../../components/Loader/Loader';


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    
    const {itemId}  = useParams();
    console.log(itemId);

    useEffect(() => {
        setLoading(false);
        const bd = getFirestore();
        const itemsCollection = bd.collection('items');
        itemsCollection.get().then((value) => {
            let datos = value.docs.map((e) => {
                return {...e.data(), id: e.id};
         });
         const found = datos.find((item) => item.id === itemId)
         setProduct(found);
        })
    }, [itemId])
        
        /*const itemPromise = new Promise((res) => {
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
        */
        
        return loading ? 
            
             <Loader />  : <ItemDetail item={product} />;
    };

export default ItemDetailContainer;
