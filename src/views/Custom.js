import React, { Fragment, useState } from "react";

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
import InputComponent from "../components/InputComponent/InputComponent";
import { httpRequest } from "http/Http";
function Customization() {

const params = useParams()

    const [brand, setBrand] = useState("")
    
    const [color, setColor] = useState("")
    const [berror, setBError] = useState(false)



    const addBrand = async ()=>{
        const data = {brand, color}
        setBError(false)
        if(!brand || !color){
            return setBError(true)
        }

        console.log(data);
        const req = await httpRequest({url:'home/brand', method:'post', data})
        console.log(req);

    }
     

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">General Custermization</Card.Title>
              </Card.Header>

              <hr />
              <Card.Body>
                <Form>
                

                    <InputComponent  label="Car Brand" value={brand} setValue={setBrand}  />
                    {/* <InputComponent  label="Color" type="color" value={color} setValue={setColor}  /> */}
                    {berror && <p style={{color:'red'}}> *Please enter details </p> }
                   <div style={{textAlign:'end'}}>
                    <Button
                    className="btn-fill pull-right"
                    style={{margin:'1rem'}}
                    variant="info"
                    onClick={addBrand}

                  >
                    Add Car Brand

                    </Button>
                    </div>
                  
                  

                  
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

export default Customization;
