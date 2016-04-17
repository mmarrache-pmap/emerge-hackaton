import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

class DetailPanel extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <div className="price-buttons">
        <h1 className="text-success text-normal">How can you help?</h1>
        <p>&nbsp;</p>
        <Row>
          <Col xs={4} className="text-center">
            <Link to="#" className="btn btn-muted btn-outline btn-lg btn-block">$25</Link>
            <small className="text-muted">Estimated</small>
          </Col>
          <Col xs={4} className="text-center">
            <Link to="#" className="btn btn-success btn-outline btn-lg btn-block">$50</Link>
            <small className="text-muted">Double Up</small>
          </Col>
          <Col xs={4} className="text-center">
            <Link to="#" className="btn btn-success btn-outline btn-lg btn-block">$100</Link>
            <small className="text-muted">Monthly</small>
          </Col>
        </Row>
        <p>&nbsp;</p>
        <Row>
          <Col sm={12}>
            <Link to={`/detail/${id}/login`} className="btn btn-success btn-block btn-lg">Donate with Visa Direct</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

DetailPanel.propTypes = {
  id: React.PropTypes.string,
};

export default DetailPanel;
