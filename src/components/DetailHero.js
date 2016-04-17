import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Hero from './Hero';


class DetailHero extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Hero type="image" src={`/static/images/organizations/${data.photo}`} overlay
              title={data.name} />

        <div className="content-wrapper fullwidth bg-grey">
          <Row>
            <Col sm={6} md={5} lg={4}>
              <p>BENEFICIARY</p>
              <h3>{data.name}</h3>
            </Col>
            <Col sm={4} smOffset={2} md={4} mdOffset={3} lg={4} lgOffset={4}>
              <br/>
              {data.address}<br />
              {`${data.city}, ${data.state} ${data.zipcode}`}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

DetailHero.propTypes = {
  data: React.PropTypes.object
};

export default DetailHero;
