import InputComponent from "components/InputComponent/InputComponent";
import { httpRequest } from "http/Http";
import React, { useState } from "react";

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

function SendMails() {

const params = useParams()
console.log(params);

const [email, setemail] = useState("")
const [text, settext] = useState("")
const [subject, setsubject] = useState("")


    

    

    const sendMail = async()=>{
      const data = {email, text, subject}
      console.log(data);
      const request = await httpRequest({ url : 'home/mail', method :'post', data })
      console.log(request['data'], "==========");
    }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Send Email</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                <InputComponent md="12" label="Email" value={email} setValue={setemail}  />
                <InputComponent md="12" label="Subject" value={text} setValue={setsubject}  />

                  
                  
                  
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Email Description</label>
                        <Form.Control
                          onChange={(e)=> settext(e.target.value)}
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Enter email description "
                          rows="10"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                  onClick={sendMail}
                    className="btn-fill pull-right"
                    variant="info"
                  >
                    Send Mail
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default SendMails;
