import "./Landing.css";
import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {RegisterUser} from "../Register/Register";

const Landing = (props) => {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <div className="container mx-auto my-auto overflow-hidden">
      <div className="row">
        <h1>Welcome to BB's Online Book Store</h1>
        <p>{props.user?.firstName}</p>
        <p>{JSON.stringify(props.user)}</p>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6 carousel align-items-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="StaticImages/Pic1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>BB's Books</h3>
                <p>
                  One stop shop for all Book Lovers!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="StaticImages/Pic2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Buy or Sell Locally!</h3>
                <p>Support Local Businesses and Authors!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="StaticImages/Pic3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Start Selling Online with Your Own Books</h3>
                <p>
                 Set up to start selling your own collection of Books
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>{" "}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Landing;
