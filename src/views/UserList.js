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
    const [users, setUsers] = useState([])
    const router = useHistory()
    

    const userHandler = (id)=>{
        router.push('/admin/name/' + id)
    }

    const getUsers = async ()=>{
      const reauest = await httpRequest({ url : 'users/find-users', method :'get'})
      if(reauest.success){
        setUsers(reauest.users)
      }
    }
  
    useEffect(() => {
      getUsers()
    }, [])


  return (
        <Container fluid>

            {users.map((user)=>  <Col style={{cursor:'pointer'}} onClick={()=>userHandler(user._id)} key={user._id} md="12">
            <Card className="card-user">
              <div className="card-image">
               
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={logo}
                    ></img>
                    <h5 className="title"> {`${user.firstName} ${user.secondName}`} </h5>
                </div>
                <p className="description text-center">
                  {user.email}
                </p>
              </Card.Body>
              <hr></hr>
              
            </Card>
          </Col>  )}
    
        

    </Container>

  )
}

export default UserList