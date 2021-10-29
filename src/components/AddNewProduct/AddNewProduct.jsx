import React, { Component } from 'react';

class AddNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: "",
            productDescription: "",
            price: "",
            genre: ""
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let intPrice = parseInt(this.state.price);
        let newProduct = {
            productName: this.state.productName,
            productDescription: this.state.productDescription,
            price: intPrice,
            genre: this.state.genre
        }
        this.props.addNewProduct(newProduct)
    }

    render() { 
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Book Title</label>
                <input name = "productName" onChange = {this.handleChange}value = {this.state.productName} />
                <label>Description</label>
                <input name = "productDescription" onChange = {this.handleChange}value = {this.state.productDescription} />
                <label>Price</label>
                <input name = "price" onChange = {this.handleChange}value = {this.state.price} />
                <label>Genre</label>
                <input name = "genre" onChange = {this.handleChange}value = {this.state.genre} />
                <button type = "submit">Add To Inventory</button>
            </form>
          );
    }
}
 
export default AddNewProduct;