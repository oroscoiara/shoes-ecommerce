import React from 'react';

export const ItemDetail = ({id, title, description, price, pictureURL}) => {

    return (
        <div className='detailContainer'>
            <div className='detail'>
                <img src={pictureURL}></img>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>{price}</h2>

            </div>
        </div>
    )
}

export default ItemDetail