import { httpRequest } from "http/Http";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function TableList() {

  const [list, setlist] = useState([])
  
  const getUsers = async ()=>{
    const reauest = await httpRequest({ url : 'cars/booked', method :'get'})
    if(reauest.success){
      console.log(reauest);
      setlist(reauest.data)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const router = useHistory()

  const navigateTouser = async(id)=>{
    router.push(`/admin/name/${id}`)
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Most Booked Cars</Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Vehicle Name</th>
                      <th className="border-0">User Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    { list.map((l, i)=> <tr key={l._id} onClick={()=>navigateTouser(l.userId)}>
                      <td>{i + 1}</td>
                      <td> {l.carName} </td>
                      <td>{l.userName}</td>
                    </tr> ) }

                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default TableList;
