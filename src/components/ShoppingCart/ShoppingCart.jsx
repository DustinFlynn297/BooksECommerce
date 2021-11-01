import React from 'react';

export const ShoppingCart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {


    // if (!cart) {
    //     return <>Loading Cart</>;
    // }
    // console.log(cart);

    return(
        <div>
            <p>This is a shopping cart</p>
            {/*<button onClick={() => onUpdateCartQty(product.id, product.quantity - 1)}>-</button>*/}
            {/*<button onClick={() => onUpdateCartQty(product.id, product.quantity + 1)}>+</button>*/}
            {/*<button onClick={() => onUpdateCartQty(product.id, product.quantity === 0)}>empty cart of item</button>*/}



        </div>
    )
}