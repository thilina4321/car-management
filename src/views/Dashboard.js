import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
import { httpRequest } from "http/Http";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {

  const [carCount, setcarCount] = useState(0)
  const [brands, setbrands] = useState([])
  const [cars, setcars] = useState([])
  const [details, setDetails] = useState([])

  const getBrand = async ()=>{
    const request = await httpRequest({ url : 'home/brand', method :'get'})
    if(request.success){
      setbrands(request.data)
    }
  }
  const getCars = async ()=>{
    const reauest = await httpRequest({ url : 'home/cars', method :'get'})
    if(reauest.success){
      setcarCount(reauest.data.length)
      setcars(reauest.data)
    }
  }

  useEffect(() => {
    getCars()
    getBrand()
  }, [])

  useEffect(() => {
    const datas = []
    brands.forEach(brand => {
      datas.push({color: brand.color, brand : brand.brand, count: 0, prec : 0})
    });

    datas.forEach(detail => {
    cars.forEach((car)=>{
        if(detail.brand === car.vehicleName){
          detail.count += 1
          detail.prec = ((detail.count / cars.length) * 100).toFixed(2)
  
        }
      })

      setDetails(prev=>[...prev, detail])

      
    });
    


  }, [cars.length, brands.length])

  

  console.log(details);



  
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">CAR COUNT</p>
                      <Card.Title as="h4">{carCount}</Card.Title>

                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">

                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-tag-content text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Car Brands</p>
                      <Card.Title as="h4">{brands.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
          
        </Row>
          
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Car Brands</Card.Title>
              </Card.Header>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: details.map(d=> `${d.brand}`),
                      series: details.map(d=> `${d.prec}`),
                    }}
                    type="Pie"
                  />
                </div>

                <div style={{height:'100px'}}></div>
                
                
            </Card>
          </Col>
        
      </Container>
    </>
  );
}

export default Dashboard;
