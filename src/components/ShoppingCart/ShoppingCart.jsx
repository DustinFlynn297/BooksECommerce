import React from 'react';

export const ShoppingCart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {


    // if (!cart) {
    //     return <>Loading Cart</>;
    // }
    // console.log(cart);

    return(
        <div>
            <p>This is a shopping cart</p>
            {/*<button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>*/}
            {/*<button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>*/}
            {/*<button onClick={() => onUpdateCartQty(item.id, item.quantity === 0)}>empty cart of item</button>*/}



        </div>
    )
}