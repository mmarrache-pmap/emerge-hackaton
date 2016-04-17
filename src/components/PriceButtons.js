import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

import { depositAmount } from '../redux/actions/deposit-actions';


class PriceButton extends React.Component {
  setCheckoutAmount(amount) {
    const { dispatch } = this.props;
    dispatch(depositAmount(amount));
  }

  render() {
    const { id } = this.props;
    const total = Math.ceil(this.props.total);

    return (
      <Row className="price-buttons">
        <Col xs={4} className="text-center">
          <Link to={`/detail/${id}/checkout`} className="btn btn-muted btn-outline btn-lg btn-block"
            onClick={this.setCheckoutAmount.bind(this, total)}>${total}</Link>
          <small className="text-muted">Estimated</small>
        </Col>
        <Col xs={4} className="text-center">
          <Link to={`/detail/${id}/checkout`} className="btn btn-success btn-outline btn-lg btn-block"
            onClick={this.setCheckoutAmount.bind(this, total * 2)}>${total * 2}</Link>
          <small className="text-muted">Double Up</small>
        </Col>
        <Col xs={4} className="text-center">
          <Link to={`/detail/${id}/checkout`} className="btn btn-success btn-outline btn-lg btn-block"
            onClick={this.setCheckoutAmount.bind(this, total * 4)}>${total * 4}</Link>
          <small className="text-muted">Monthly</small>
        </Col>
      </Row>
    );
  }
}

PriceButton.propTypes = {
  id: React.PropTypes.number,
  total: React.PropTypes.number,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = (state) => ({});

// Export.
export default connect(mapStateToProps)(PriceButton);
