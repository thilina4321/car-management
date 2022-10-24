import { httpRequest } from 'http/Http';
import React, { useEffect, useState } from 'react'
import logo from '../assets/img/faces/face-3.jpg'
import logo1 from '../assets/img/logo1.jpeg'
import logo2 from '../assets/img/logo2.jpeg'
import logo3 from '../assets/img/logo3.jpeg'

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

const defaultUsers = [
  {_id:1, firstName:'Peter', secondName:'Miller', email:'peter@miller.com', logo},
  {_id:2, firstName:'James', secondName:'Andi', email:'james@andi.com', logo:logo1},
  {_id:3, firstName:'Paul', secondName:'Walker', email:'paul@waler.com', logo:logo2},
  {_id:4, firstName:'Steve', secondName:'Smith', email:'steve@smith.com', logo:logo3},
]
const UserList = () => {
    const [users, setUsers] = useState([])
    const router = useHistory()
    

    const userHandler = (id)=>{
        router.push('/admin/name/' + id)
    }

    const getUsers = async ()=>{
      // default get users
      setUsers(defaultUsers)
      return;
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
          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap'
          }}>
            <div style={{width:'700px'}}>
            {users.map((user)=>  <Col style={{cursor:'pointer'}} key={user._id} md="12">
            <Card className="card-user">
              <div className="card-image">
               
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={user.logo}
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
            </div>

          </div>

            
    
        

    </Container>

  )
}

export default UserList