import "./Landing.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import {RegisterUser} from "../Register/Register";

const Landing = (props) => {
  console.log("props.user: ", props.user);
  return (
    <div className="container mx-auto my-auto overflow-hidden">
      <div className="row">
        <h1>Welcome to BB*</h1>

        {/* <p>{!props.user}</p> */}
        <p>{props.user.firstName}</p>
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
                <h3>Not Books!</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
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
                <h3>Books!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="StaticImages/Pic3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>More Books!</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
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
