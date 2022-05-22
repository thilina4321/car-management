import InputComponent from "components/InputComponent/InputComponent";
import { httpRequest } from "http/Http";
import React, { useEffect, useState } from "react";

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
import { useLocation } from "react-router-dom";

function SendMails() {

const params = useParams()
const loc = useLocation()

const [email, setemail] = useState("")
const [text, settext] = useState("")
const [subject, setsubject] = useState("")
const [isLoading, setisLoading] = useState(false)


useEffect(()=>{
  if(loc.pathname.split('/')[3]){
    setemail(loc.pathname.split('/')[3])
  }
}, [loc.pathname])



    

    const sendMail = async()=>{
      const data = {email, text, subject}
      setisLoading(true)
      await httpRequest({ url : 'home/mail', method :'post', data })
      setisLoading(false)
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
                          defaultValue={text}
                          placeholder="Enter email description "
                          rows="10"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div style={{textAlign:'end'}}>
                  <Button
                  onClick={sendMail}
                    className="btn-fill pull-right"
                    variant="info"
                  >
                    { isLoading ? "Sending Mail .... " : "Send Mail"}
                  </Button>
                  </div>
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
