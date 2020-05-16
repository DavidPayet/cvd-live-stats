import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactTooltip from "react-tooltip";
import { FaGithubAlt } from "react-icons/fa";
import { DiOpensource } from "react-icons/di";

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <Container className="footer">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <a
              href="https://github.com/DavidPayet/cvd-live-stats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt className="iconsLinks" data-tip data-for='codeSource' />
              <ReactTooltip
                id='codeSource'
                place="top"
                type="light"
                effect="float"
                textColor='#5F4B8BFF'
              >
                <span>View Source Code</span>
              </ReactTooltip>
            </a>
            <a
              href="https://corona.lmao.ninja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiOpensource className="iconsLinks" data-tip data-for='dataSource' />
              <ReactTooltip
                id='dataSource'
                place="top"
                type="light"
                effect="float"
                textColor='#5F4B8BFF'
              >
                <span>Data Source : https://corona.lmao.ninja</span>
              </ReactTooltip>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;