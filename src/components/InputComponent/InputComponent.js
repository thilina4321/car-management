import React from 'react'
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
const InputComponent = (props) => {

    const {md = 12,label, value, setValue, type = "text"} = props
  return (
    <>
    <Col className="pr-1" md={md}>
    <label>{label}</label>
    <Form.Control 
    onChange={(e) => setValue(e.target.value)}
    defaultValue={value}
    placeholder={label}
    type={type}
  ></Form.Control> 
                                                                
    </Col>
    </>
  )
}

export default InputComponent