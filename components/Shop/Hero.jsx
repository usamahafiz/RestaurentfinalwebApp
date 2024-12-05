import React from "react";
import { Breadcrumb } from "react-bootstrap";  
import { Link } from "react-router-dom";  

const Hero = () => {
  return (
    <div className="sectionStyle">
      <h4
        style={{
          fontFamily: "Playfair-Display",
          fontSize: "60px",
        }}
      >
        Menu
      </h4>

      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active style={{color: "#fff"}}>Menu</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Hero;
