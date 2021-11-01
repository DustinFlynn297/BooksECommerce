import './App.css';
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Redirect, Switch, Route } from 'react-router';
import {RegisterUser} from "./components/Register/Register";
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import NavBar from './components/NavBar/NavBar';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
// import {registerUser} from ''


class App extends Component {
  state = {
    userLoggedIn: null,
    books: [],
    reviews: [],
    book: [],
    user : []
  }


  componentDidMount() {
    this.getAllBooks(); 
    let userId = this.token();
    this.getUserDetails(userId)
  }

  token = () => {
    const jwt = localStorage.getItem('token');
    try  {
      const user = jwtDecode(jwt);
      this.setState({
        userLoggedIn: user
      });
      return user.id;
    }catch(error){
      console.log(error, "error with token function");
    }
  }

  getAllBooks = async ()  => {
    let response = await axios.get('https://localhost:44394/api/products') ;
    this.setState({
      books : response.data,
    });
  }

  registerUser = async (userToBeRegisteredObject) => {
    try {
      const response = await axios.post('https://localhost:44394/api/authentication' , userToBeRegisteredObject);
      this.loginUser({'userName' : userToBeRegisteredObject.userName, 'password': userToBeRegisteredObject.password })
      window.location = '/register';
    } catch(error) {
      console.log(error, 'error with register user');
    }
  }

  loginUser = async (loggedInUserObject) => {
    console.log("Inside LogInUser Callback")
    console.log("object", loggedInUserObject)
    try {      
      const response = await axios.post('https://localhost:44394/api/authentication/login/', loggedInUserObject);
      localStorage.setItem('token', response.data.token);
      this.token();
      this.getUserDetails(this.state.userLoggedIn.id);
      console.log("Login State user:" , this.state.userLoggedIn)
      // window.location='/'
    } catch(error) {
      console.log(error, 'error with logged in user');
      return error
    }
  }

  loggedOutUser = () => {
    localStorage.removeItem('token');
    window.location = '/';
    this.setState({userLoggedIn : null});
  }

  getUserDetails = async (userId) => {
    // const jwt = localStorage.getItem('token');
    console.log("User id", userId)
    try {
      let response = await axios.get(`https://localhost:44394/api/users/${userId}`);
      console.log("*** RESPONSE DATA ****", response.data);
      this.setState ({
        userLoggedIn: response.data
      })
    }
    catch (er) {
      console.log("Error with the userDetails", er)
    }
  }

  getBookReviews = async (bookId) => {
    try{
      let response = await axios.get(`https://localhost:44394/api/review/${bookId}`);
      this.setState({
        reviews: response.data
      })
    }
    catch(er) {
      console.log("Error with getBooksReview", er)
    }
  }

  getSingleBook = async (bookId) => {
    try{
      let response = await axios.get(`https://localhost:44394/api/products/${bookId}`);
      this.setState({
        book: response.data
      })
    }
    catch(er) {
      console.log("Error with getSingleBook", er)
    }
  }

  addToCart = async (userId, productId) => {
    try{
      await axios.post(`https://localhost:44394/api/shoppingCart/${userId}/${productId}`);
    }
    catch(er) {
      console.log("Error with addToCart", er)
    }
  }
  
  addNewProduct = async (newProductObject) => {
    try{
      let response = await axios.post("https://localhost:44394/api/products", newProductObject);
        console.log(response)
    } catch (er) {
      console.log("Error with AddNewProduct", er);
    }
  };


  postReview = async (review) => {
      console.log(review)
    try {
      await axios.post(`https://localhost:44394/api/review`, review);
      // this.getBookReviews(review.productId);
      // window.location = `/bookDetails/${review.productId}`
    }
    catch(error) {
      console.log("Error with Post Review line 100 App.js" , error);
    }
  }

  render() {
    return (
      
      <div className="App">
        {console.log("loggedin user: ", this.state.user)}

        <header className="App-header">
          <NavBar />
          <Switch>
            
            <Route exact={true} path = "/" render  = {props => <Landing {...props} user={this.state.userLoggedIn} getUserDetails={this.getUserDetails} /> } />
            <Route path = "/login" render = {props => <Login {...props} login={this.loginUser}/>} />
            <Route path = "/register" render = {props => <RegisterUser {...props} registerUser = {this.registerUser} /> }/>
            <Route path = "/books" render = {props => <ProductList {...props} getAllBooks = {this.getAllBooks} books = {this.state.books} getSingleBook = {this.getSingleBook} />} />
            <Route path = "/shoppingcart" render = {props => <ShoppingCart {...props} user={this.state.userLoggedIn} />} />
            <Route path = "/addNew" render = {props => <AddNewProduct {...props} addNewProduct = {this.addNewProduct} />}  />
            <Route path = "/bookDetails" render = {props =>
                <ProductDetail {...props}
                     user={this.state.userLoggedIn}
                     getAllBooks={this.getAllBooks}
                     getSingleBook={this.getSingleBook}
                     addToCart={this.addToCart}
                     book={this.state.book}
                     postReview={this.postReview}
                     getBookReviews={this.getBookReviews}
                     reviews={this.state.reviews}

              />}
            />
           
            <Redirect to = "/" />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
