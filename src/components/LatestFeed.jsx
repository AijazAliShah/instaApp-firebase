import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faThLarge} from '@fortawesome/free-solid-svg-icons';

const pic2 = require('../img/pic2.jpg');
const pic3 = require('../img/pic3.JPG');
const pic4 = require('../img/pic4.jpeg');
const pic5 = require('../img/pic5.jpg');

class LatestFeed extends Component {
    render() {
      return (
        <div>

        <div>
        <Container>

            <Row>
              <Col lg>
                <div className="d-flex justify-content-between">
                  <h3>Latest Feed</h3>
                  <div>
                     <FontAwesomeIcon icon={faBars} />
                     &nbsp;
                     <FontAwesomeIcon icon={faThLarge} />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
                <Col lg={3}><Image src={pic2} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic3} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic4} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic5} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic2} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic3} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic4} width="100%" height="100%"/></Col>
                <Col lg={3}><Image src={pic5} width="100%" height="100%"/></Col>
            </Row>

        </Container>
        </div>

      </div>
      )
    }
  }
  
  export default LatestFeed;