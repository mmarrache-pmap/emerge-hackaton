import React from 'react';
import { Link } from 'react-router';
import {Row, Col} from 'react-bootstrap';


class PriceButton extends React.Component {
  render() {
    const total = Math.ceil(this.props.total);

    return (
      <Row className="price-buttons">
        <Col xs={4} className="text-center">
          <Link to="#" className="btn btn-muted btn-outline btn-lg btn-block">${total}</Link>
          <small className="text-muted">Estimated</small>
        </Col>
        <Col xs={4} className="text-center">
          <Link to="#" className="btn btn-success btn-outline btn-lg btn-block">${total * 2}</Link>
          <small className="text-muted">Double Up</small>
        </Col>
        <Col xs={4} className="text-center">
          <Link to="#" className="btn btn-success btn-outline btn-lg btn-block">${total * 4}</Link>
          <small className="text-muted">Monthly</small>
        </Col>
      </Row>
    );
  }
}

PriceButton.propTypes = {
  total: React.PropTypes.number
};

export default PriceButton;
