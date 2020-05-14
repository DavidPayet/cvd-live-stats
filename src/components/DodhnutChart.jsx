import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

const DodhnutChart = () => {
  const [latest, setLatest] = useState([])

  useEffect(() => {
    axios.get('https://corona.lmao.ninja/v2/all')
      .then(res => {
        setLatest(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const date = new Date(parseInt(latest.updated));
  const latestUpdated = date.toString();

  const doughnutData = {
    labels: ['Cases', 'Deaths', 'Recovered'],
    datasets: [
      {
        data: [latest.cases, latest.deaths, latest.recovered],
        backgroundColor: [
          'rgb(221, 126, 68)',
          'rgb(219, 45, 68)',
          'rgb(38, 169, 76)'],
        hoverBorderColor: 'transparent'
      }
    ]
  }

  const doughnutOptions = {
    rotation: 4,
    legend: {
      onHover: function (e) {
        e.target.style.cursor = 'pointer';
      }
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }

  return (
    <div>
      <Container>
      <p className="lastUpdate" >Last updated {latestUpdated}</p>
        <Row>
          <Col xl="2" lg="2" md="2" />
          <Col xl="8" lg="8" md="8" sm="12" xs="12" className="doghnutCol">
            <Doughnut
              data={doughnutData}
              options={doughnutOptions}
            />
          </Col>
          <Col xl="2" lg="2" md="2" />
        </Row>
      </Container>
    </div>
  );
};

export default DodhnutChart;