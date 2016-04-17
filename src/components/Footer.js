import React from 'react';
import { Row, Col } from 'react-bootstrap';


class Footer extends React.Component {
  render() {
    return (
    <Footer>
      <Row>
        <Col md={4}>
          <h2>Efficient Rebels</h2>
            <ul>
              <li>Michel Marrache</li>
              <li>Cyrus Walker</li>
              <li>Marcelo Paiva</li>
              <li>Christian Cortes</li>
              <li>Joann Kim</li>
            </ul>
        </Col>
        <Col md={4}>
          <h2>Stack</h2>
          <ul>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
          </ul>
        </Col>
        <Col md={4}>
          <h2>API</h2>
          <ul>
            <li>Visa Direct</li>
            <li>ProRepublica</li>
            <li>Flickr</li>
          </ul>
        </Col>
      </Row>
    </Footer>
    );
  }
}

Footer.propTypes = {
  // title: React.PropTypes.string,
};

export default Footer;
