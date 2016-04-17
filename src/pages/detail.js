import React from 'react';
import { Link } from 'react-router';
import Main from '../layouts/main';
import DetailHero from '../components/DetailHero';
import { Row, Col } from 'react-bootstrap';
import { DetailView, LoginView, CheckoutView } from './detailViews';

import utils from '../utils';

import { propublicaData } from '../static/propublicaData';


class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  render() {
    const params = this.props.params;
    const paramId = params.id;
    const paramView = params.view || 'details';
    const id = parseInt(paramId, ((paramId.length * 10) - 10));
    // console.log(propublicaData);
    console.log(paramView);

    let currentOrg = {};

    const details = propublicaData.filings.map( (item, index) => {
      // console.log(item.id, id);
      if (item.id === id) {
        currentOrg = item;
        return;
      }
    });
    // console.log(currentOrg);

    let rightPanel;
    switch (paramView) {
    case 'checkout':
      rightPanel = <CheckoutView id={paramId} />;
      break;
    case 'login':
      rightPanel = <LoginView id={paramId} />;
      break;
    default:
      rightPanel = <DetailView id={paramId} />;
    }

    return (
      <Main>
        <DetailHero data={currentOrg.organization} />

        <div className="content-wrapper">
          <Row>

            <Col sm={6} md={5}>
              <h1 className="text-link text-normal">We need these items</h1>
              <p>&nbsp;</p>
              <ul className="square-bullets">
                <li>18-pack White Washcloths</li>
                <li>Microfiber Pillow, 2 Pack</li>
                <li>Adult Sleeping bag</li>
              </ul>
              <hr />
              <h2 className="text-center text-muted">
                <small className="text-muted">ESTIMATED AMOUNT</small>
                {' '}
                $25
              </h2>
              <p>&nbsp;</p>
              <p>This charitable donation is being made to a 501(c)(3) exempt organization to be deductable.</p>
            </Col>

            <Col sm={6} md={5} mdOffset={2}>
              <Link to={`/confirmation/${paramId}`}>Confirm</Link>
              {rightPanel}
            </Col>

          </Row>
        </div>

      </Main>
    );
  }
}

// propTypes.
DetailPage.propTypes = {
  params: React.PropTypes.object,
};

// Export.
export default DetailPage;
