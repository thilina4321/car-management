import { httpRequest } from 'http/Http';
import React, { useEffect, useState } from 'react'
import logo from '../assets/img/faces/face-3.jpg'

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

import {useHistory} from 'react-router'
const UserList = () => {
    const [cars, setUsers] = useState([])
    const router = useHistory()
    

    const userHandler = (id)=>{
        router.push('/admin/car/' + id)
    }

    const getUsers = async ()=>{
      const reauest = await httpRequest({ url : 'home/cars', method :'get'})
      if(reauest.success){
        setUsers(reauest.data)
      }
    }
  
    useEffect(() => {
      getUsers()
    }, [])


  return (
        <Container fluid>

            {cars.map((car)=>  <Col style={{cursor:'pointer'}} onClick={()=>userHandler(car.id)} key={car.id} md="12">
            <Card className="card-user">
              <div className="card-image">
               
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940"}
                    ></img>
                    <h5 className="title"> {`${car.vehicleName}`} </h5>
                </div>
                <p className="description text-center">
                 Rs -  {car.price}
                </p>
              </Card.Body>
              <hr></hr>
              
            </Card>
          </Col>  )}
    
        

    </Container>

  )
}

export default UserList