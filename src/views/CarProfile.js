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

    const [isLoading, setisLoading] = useState(false)


    useEffect(() => {
      if(params.id){
        getUser()
      }
    }, [params.id])

    const getUser = async ()=>{
      const request = await httpRequest({url :`home/car/${params.id}`, method:'get'})
      if(request.success){
        const {year , price, description, image, transmission, fuelType, _id,
        seats, ac, vehicleName } = request.data 



        setyear(year)
        setId(_id)
        setVehicleName(vehicleName)
        setimage(image)
        setprice(price)
        setdescription(description)
        settransmission(transmission)
        setfuelType(fuelType)
        setseats(seats)
        setac(ac)
        setemail(email)
      }
    }


    const sendEmail = ()=>{
      router.push(`/admin/emails/${email}`)
    }

    const deleteCar = async()=>{
        setisLoading(true)
      const request = await httpRequest({url: `home/cars/${params.id}`, method:'delete'})
      setisLoading(false)

      if(request.success){
        router.push('/admin/cars')
      }
    }
    

  return (
      <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              

              <hr />
              <Card.Body>
              
                <Form>

                <div style={{textAlign:'end', width:'100%'}}>
                 
                    <Button
                    onClick={deleteCar}
                    className="btn-warning pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                  >
                    {isLoading ? "Deleting user ... " : "Delete Car"}
                  </Button>
                  </div>
                 

                  <div className="author" style={{textAlign:'center'}} >
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={"https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940"}
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
