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


import { useParams, useHistory} from 'react-router'
import InputComponent from "../components/InputComponent/InputComponent";

function NewUser() {

    

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
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [defaultPassword, setdefaultPassword] = useState("")

    const [isNext, setIsNext] = useState(false)
    const [brands, setBrands] = useState([])


    const getBrand = async ()=>{
        const data = await httpRequest({ url : 'home/brand', method :'get'})
        if(data.success){
          setBrands(data.data)
          setVehicleName(data.data[0].brand)
        }
        
      }
    
      useEffect(() => {   
        getBrand()  
      }, [])

    const createUserAndCar = async ()=>{
        const data = {vehicleName,
            year,
            image,
            price,
            description,
            transmission,
            fuelType,
            seats,
            ac,
          }

            const request = await httpRequest({ url : 'users/create-car', method :'post', data})

        if(request.success){
            router.push(`/admin/car/${request.car.id}` )
        }
    
      }

      
    
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Making User By Admin</Card.Title>
              </Card.Header>

              <hr />
              <Card.Body>
                <Form>
                

                   <Fragment>
                    <Card.Title as="h4"> Car Details </Card.Title>
                    <hr />

                    <InputComponent  label="Vehicle Name" value={vehicleName} setValue={setVehicleName}  />
                    <InputComponent  label="year" value={year} setValue={setyear}  />
                    <InputComponent  label="price" type="number" value={price} setValue={setprice}  />
                    <InputComponent  label="description" value={description} setValue={setdescription}  />
                    <InputComponent  label="transmission" value={transmission} setValue={settransmission}  />
                    <InputComponent  label="fuel type" value={fuelType} setValue={setfuelType}  />
                    <InputComponent  label="seat" value={seats} setValue={setseats}  />
                    <InputComponent  label="ac" value={ac} setValue={setac}  />
                   <div style={{textAlign:'end'}}>
                    <Button
                    onClick={()=>createUserAndCar()}
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    Create User
                  </Button>
                  </div>
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

export default NewUser;
