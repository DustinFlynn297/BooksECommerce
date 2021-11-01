
import React, { Component } from 'react';
import styled from "styled-components";
const StyleAddNewProductDiv = styled.div`
 .add-new-product-container{
  width: 100%;
  // height: 100%;
  background-color: #EEEEEE;
  color: red;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
 }
 .add-product-input{
  width: 100%;
  padding: 12px 20px;
  // margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box
 }
`
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
      <div >
        <StyleAddNewProductDiv>
          <div className="add-new-product-container">
            <form onSubmit = {this.handleSubmit}>
              <label>Book Title</label>
              <input className="add-product-input" name = "productName" onChange = {this.handleChange}value = {this.state.productName} />
              <br/>
              <label>Description</label>
              <input className="add-product-input" name = "productDescription" onChange = {this.handleChange}value = {this.state.productDescription} />
              <br/>
              <label>Price</label>
              <input className="add-product-input" name = "price" onChange = {this.handleChange}value = {this.state.price} />
              <br/>
              <label>Genre</label>
              <input className="add-product-input" name = "genre" onChange = {this.handleChange}value = {this.state.genre} />
              <br/>
              <button type = "submit">Add To Inventory</button>
            </form>
          </div>
        </StyleAddNewProductDiv>
      </div>
     );
  }
}
export default AddNewProduct;