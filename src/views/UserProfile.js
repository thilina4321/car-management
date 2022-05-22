import InputComponent from "components/InputComponent/InputComponent";
import { httpRequest } from "http/Http";
import React, { Fragment, useEffect, useState } from "react";
import logo from '../assets/img/faces/face-3.jpg'
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Table,
  Row,
  Col,
} from "react-bootstrap";


import { useParams} from 'react-router'
import { useHistory } from "react-router-dom";

function User() {

    const params = useParams()
    const router = useHistory()

    const [vehicleName, setVehicleName] = useState("")
    const [year, setyear] = useState("")
    const [image, setimage] = useState("default")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [transmission, settransmission] = useState("")
    const [fuelType, setfuelType] = useState("")
    const [seats, setseats] = useState("")
    const [ac, setac] = useState("")

    const [firstName, setfirstName] = useState("")
    const [_id, setId] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [defaultPassword, setdefaultPassword] = useState("")

    useEffect(() => {
      if(params.id){
        getUser()
      }
    }, [params.id])

    const getUser = async ()=>{
      const request = await httpRequest({url :`users/find-user-and-car/${params.id}`, method:'get'})
      console.log(request.success);
      if(request.success){
        const {firstName, secondName, email, _id} = request.user

        setId(_id)
        // setimage(image)
        setfirstName(firstName)
        setlastName(secondName)
        setemail(email)
      }
    }

    

    const [list, setlist] = useState([])
  
  const getUsers = async ()=>{
    const reauest = await httpRequest({ url : `cars/booked/${params.id}`, method :'get'})
    if(reauest.success){
      console.log(reauest);
      setlist(reauest.data)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])


    const sendEmail = ()=>{
      router.push(`/admin/emails/${email}`)
    }

    const deleteUser = async()=>{
      const request = await httpRequest({url: `user/delete/${_id}`, method:'delete'})
      console.log(_id);
      if(request.success){
        router.push('/admin/user')
      }
    }
    

  return (
      <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">{`User - ${firstName} ${lastName}`} </Card.Title>
                <Row>
                <div style={{textAlign:'end', width:'100%'}}>
                    <Button
                    onClick={sendEmail}
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    Send Email
                  </Button>
                 
                    <Button
                    onClick={deleteUser}
                    className="btn-warning pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    Delete User
                  </Button>
                  </div>
                  </Row>

              </Card.Header>

              <hr />
              <Card.Body>
              <div className="author" style={{textAlign:'center'}} >
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={logo}
                      style={{height:'100px', width:'100px'}}
                    />
                </div>
                <Form>
                 <Fragment> 
                  <Row>
                    <InputComponent md="6" label="First Name" value={firstName} setValue={setfirstName}  />
                    <InputComponent md="6" label="Last Name" value={lastName} setValue={setlastName}  />
                   
                    
                  </Row>
                  <InputComponent  label="Email" value={email} setValue={setemail}  />
                  

                  </Fragment>

                  <div style={{textAlign:'center', marginTop:'70px'}} />


                 
                  

                  
                  <div className="clearfix"></div>
                </Form>



                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Vehicle Name</th>
                      <th className="border-0">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map((l, i)=> <tr key={l._id}>
                      <td>{i + 1}</td>
                      <td> {l.carName} </td>
                      <td> Rs - {l.price}</td>
                    </tr> ) }

                    
                  </tbody>
                </Table>



              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
}

export default User;
