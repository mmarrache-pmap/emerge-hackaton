import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import PriceButtons from '../../components/PriceButtons';

class DetailPanel extends React.Component {
  render() {
    const { id } = this.props;

    return (
      <div>
        <h1 className="text-success text-normal">How can you help?</h1>
        <PriceButtons id={id} total={20} />
        <p>&nbsp;</p>
        <Row>
          <Col sm={12}>
            <Link to={`/detail/${id}/checkout`} className="btn btn-success btn-block btn-lg">Donate with Visa Direct</Link>
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
