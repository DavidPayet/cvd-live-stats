import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../components/Footer';
import '../styles/HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>CVD-19 Stats</h1>
      <Container className="homePage">
        <Row>
          <Col xl="6" lg="6" md="6" sm="12" xs="12" >
            <img
              className="illustration"
              src="/medias/illustration4.svg"
              alt="Illustration"
            />
          </Col>
          <Col xl="6" lg="6" md="6" sm="12" xs="12" className="linkCol">
            <Link to='/covidlivestats' className="linkBtn">
              <p>CVD Live Stats</p>
            </Link>
          </Col>
        </Row>
        <br />
        <Row className="reversedCol">
          <Col xl="6" lg="6" md="6" sm="12" xs="12" className="linkCol">
            <Link to='/covidlocation' className="linkBtn">
              <p>CVD Location</p>
            </Link>
          </Col>
          <Col xl="6" lg="6" md="6" sm="12" xs="12" id="two">
            <img
              className="illustration"
              src="/medias/illustration3.svg"
              alt="Illustration"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default HomePage