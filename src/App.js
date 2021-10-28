import './App.css';
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Redirect, Switch, Route } from 'react-router';
import {RegisterUser} from "./components/Register/Register";
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
// import {registerUser} from ''


class App extends Component {
  state = {
    userLoggedIn: null,
    books: [],
  }

  componentDidMount() {
    this.getAllBooks()
    const jwt = localStorage.getItem('token');
    try  {
      const user = jwtDecode(jwt);
      this.setState({userLoggedIn: user});

    }catch(error){
      console.log(error, "error with componentDidMount");
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
      this.logInUser({'userName' : userToBeRegisteredObject.userName, 'password': userToBeRegisteredObject.password })
      window.location = '/register';
    } catch(error) {
      console.log(error, 'error with register user');
    }
  }

  logInUser = async (loggedInUserObject) => {
    try {
      let response = await axios.post('https://localhost:44394/api/authentication/login', loggedInUserObject);
      localStorage.setItem('token', response.data.token);
      window.location = '/';
    } catch(error) {
      console.log(error, 'error with logged in user');
    }
  }

  loggedOutUser = () => {
    localStorage.removeItem('token');
    window.location = '/';
    this.setState({userLoggedIn : null});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path = "/" exact component = {Landing} />
            <Route path = "/login" render = {props => <Login {...props} loggin = {this.logInUser}/>} />
            <Route path = "/register" render = {props => <RegisterUser {...props} registerUser = {this.registerUser} /> }/>
            <Route path = "/products" render = {props => <ProductList {...props} getAllBooks = {this.getAllBooks} books = {this.state.books} />} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
