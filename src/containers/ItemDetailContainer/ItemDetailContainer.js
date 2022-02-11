import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getFirestore } from '../../components/Firebase/firebase';
import Loader from '../../components/Loader/Loader';
//trae mediante Paramas el id del producto que el usuario consulta. Lo busca en Firebase y lo trae a ItemDetail

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    
    const {itemId}  = useParams();
    console.log(itemId);

    useEffect(() => {
        setLoading(true);
        const bd = getFirestore();
        const itemsCollection = bd.collection('items');
        itemsCollection.get().then((value) => {
            let datos = value.docs.map((e) => {
                return {...e.data(), id: e.id};
         });
         const found = datos.find((item) => item.id === itemId)
         setProduct(found);
        }).finally(() => {
        setLoading(false)
    })
    }, [itemId]);

    return  (loading ? (<Loader padTop={true} /> ) : (
             <ItemDetail item={product} />
        
         
    ));
    }
export default ItemDetailContainer;

        
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
        
