import InputComponent from "components/InputComponent/InputComponent";
import { httpRequest } from "http/Http";
import React, { Fragment, useEffect, useState } from "react";

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


import { useParams} from 'react-router'

function User() {

const params = useParams()
console.log(params);

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
        const {firstName, secondName, email} = request.user 
        const {year , price, description, image, transmission, fuelType, 
        seats, ac, vehicleName } = request.car 

        setyear(year)
        setVehicleName(vehicleName)
        setimage(image)
        setprice(price)
        setdescription(description)
        settransmission(transmission)
        setfuelType(fuelType)
        setseats(seats)
        setac(ac)
        setfirstName(firstName)
        setlastName(secondName)
        setemail(email)
      }
    }

    console.log("hellow rold");
    

  return (
      <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">{`User - ${firstName} ${lastName}`} </Card.Title>
              </Card.Header>

              <hr />
              <Card.Body>
              <div className="author" style={{textAlign:'center'}} >
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
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


                  <hr />

                  <div className="author" style={{textAlign:'center', marginTop:'70px'}} >
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                      style={{height:'100px', width:'100px'}}
                    />
                </div>

                  <Fragment>
                    <InputComponent  label="Vehicle Name" value={vehicleName} setValue={setVehicleName}  />
                    <InputComponent  label="year" value={year} setValue={setyear}  />
                    <InputComponent  label="price" type="number" value={price} setValue={setprice}  />
                    <InputComponent  label="description" value={description} setValue={setdescription}  />
                    <InputComponent  label="transmission" value={transmission} setValue={settransmission}  />
                    <InputComponent  label="fuel type" value={fuelType} setValue={setfuelType}  />
                    <InputComponent  label="seat" value={seats} setValue={setseats}  />
                    <InputComponent  label="ac" value={ac} setValue={setac}  />
                   {/* <div style={{textAlign:'end'}}>
                    <Button
                    onClick={()=>createUserAndCar()}
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    Create User
                  </Button>
                  </div> */}
                  </Fragment> 
                  

                  
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
}

export default User;
