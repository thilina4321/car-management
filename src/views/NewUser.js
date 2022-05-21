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
            firstName,
            secondName :lastName,
            email,
            password: defaultPassword}

            const request = await httpRequest({ url : 'users/create-user-and-car', method :'post', data})

        if(request.success){
            console.log(request.user._id);
            router.push(`/admin/name/${request.user._id}` )
        }
    
      }

      const onSelect = (e)=>{
          setVehicleName(e.target.value)
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
                { isNext === false &&  <Fragment> <Card.Title as="h4"> User Details </Card.Title>
                <hr />

                  <Row>
                    <InputComponent md="6" label="First Name" value={firstName} setValue={setfirstName}  />
                    
                    <InputComponent md="6" label="Last Name" value={lastName} setValue={setlastName}  />
                   
                    
                  </Row>
                 
                  <InputComponent  label="Email" value={email} setValue={setemail}  />
                  <InputComponent  label="Default Password" value={defaultPassword} setValue={setdefaultPassword}  />
                  <div style={{textAlign:'end'}}>

                  <Button
                    onClick={()=>setIsNext(true)}
                    style={{margin:'1rem'}}
                    className="btn-fill pull-right"
                    variant="info"
                  >
                    Next
                  </Button>
                  </div>

                  </Fragment>}

                  { isNext && <Fragment>
                    <Card.Title as="h4"> Car Details </Card.Title>
                    <hr />

                    <label> Vehicle Name </label>
                    <select onChange={onSelect} style={{width:'99%', height:'35px', margin:'auto', marginTop:'5px', borderRadius: '5px'}}> 
                       {brands.map(b=>  <option key={b.brand} value={b.brand}> {b.brand} </option>) }
                    </select>
                    <InputComponent  label="year" value={year} setValue={setyear}  />
                    <InputComponent  label="price" type="number" value={price} setValue={setprice}  />
                    <InputComponent  label="description" value={description} setValue={setdescription}  />
                    <InputComponent  label="transmission" value={transmission} setValue={settransmission}  />
                    <InputComponent  label="fuel type" value={fuelType} setValue={setfuelType}  />
                    <InputComponent  label="seat" value={seats} setValue={setseats}  />
                    <InputComponent  label="ac" value={ac} setValue={setac}  />
                   <div style={{textAlign:'end'}}>
                    <Button
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                    onClick={()=>setIsNext(false)}

                  >
                    Previous
                  </Button><Button
                    onClick={()=>createUserAndCar()}
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    Create User
                  </Button>
                  </div>
                  </Fragment> }
                  

                  
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
