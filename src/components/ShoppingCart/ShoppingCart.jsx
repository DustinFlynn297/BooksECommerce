import axios from 'axios';
import React, { Component } from 'react';


class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            books: [],
            quantity: 0
         }
    }

    getShoppingCart = async () => {
        let response = await axios.get('https://localhost:44394/api/shoppingCart/')
    }

    render() { 
        return (  );
    }
}
 
export default ShoppingCart;

