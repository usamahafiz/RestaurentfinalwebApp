import React from 'react'
import { Breadcrumb } from "react-bootstrap";  
import { Link } from "react-router-dom";  


const Hero = () => {
  return (
    <div className="sectionStyles">
      <h4
        style={{
          fontFamily: "Playfair-Display",
          fontSize: "60px",
        }}
      >
        Contact Us
      </h4>

      <Breadcrumb>
        <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active className='text-light'>Contact</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Hero