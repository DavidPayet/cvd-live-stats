import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import { GoSearch } from "react-icons/go";

const Countries = () => {
  const [result, setResult] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    axios.get('https://corona.lmao.ninja/v2/countries')
      .then(res => {
        setResult(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const filterCountries = result.filter(item => {
    return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries) : item;
  })

  const countries = filterCountries.map((data, i) => {
    return (
      <Col xl="3" lg="3" md="6" sm="12" xs="12" key={i}>
        <Card className="oneCard">
          <Card.Img variant="top" src={data.countryInfo.flag} className="flag" />
          <Card.Body>
            <Card.Title className="titleCard">{data.country}</Card.Title>
            <Card.Text>Cases {data.cases}</Card.Text>
            <Card.Text>Deaths {data.deaths}</Card.Text>
            <Card.Text>Recovered {data.recovered}</Card.Text>
            <Card.Text>Today's Cases {data.todayCases}</Card.Text>
            <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
            <Card.Text>active {data.active}</Card.Text>
            <Card.Text>Critical {data.critical}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <div>
      <Form className="searchBar">
        <Form.Group controlId="formGroupSearch">
          <Form.Label>
            <GoSearch className="searchLogo" />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Search a country"
            onChange={e => setSearchCountries(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <Container>
        <Row>
          {countries}
        </Row>
      </Container>
    </div>
  );
};

export default Countries;