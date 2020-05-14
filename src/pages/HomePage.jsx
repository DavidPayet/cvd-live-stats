import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>CVD-19 Stats</h1>
      <Container>
        <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10" className="linkCol">
            <Link to='/covidlivestats' className="linkBtn">
              <p>Global CVD Live Stats</p>
            </Link>
          </Col>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
        </Row>
        <br />
        <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10" className="linkCol">
            <Link to='/covidlocation' className="linkBtn">
              <p>CVD Live Stats on the Map</p>
            </Link>
          </Col>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
        </Row>
      </Container>
    </div>
  )
}

export default HomePage