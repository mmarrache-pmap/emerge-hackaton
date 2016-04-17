import React from 'react';
import { Row, Col } from 'react-bootstrap';


class Footer extends React.Component {
  render() {
    return (
    <div className="content-wrapper footer">
      <Row>
        <Col md={4}>
          <h2>Efficient Rebels</h2>
            <ul className="nav">
              <li>Michel Marrache</li>
              <li>Cyrus Walker</li>
              <li>Marcelo Paiva</li>
              <li>Christian Cortes</li>
              <li>Joann Kim</li>
            </ul>
        </Col>
        <Col md={4}>
          <h2>Stack</h2>
          <ul className="nav">
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
          </ul>
        </Col>
        <Col md={4}>
          <h2>API</h2>
          <ul className="nav">
            <li>Visa Direct</li>
            <li>ProRepublica</li>
            <li>Flickr</li>
          </ul>
        </Col>
      </Row>
    </div>
    );
  }
}

export default Footer;
