import React from 'react';
import Main from '../layouts/main';
import DetailHero from '../components/DetailHero';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { DetailView, LoginView, CheckoutView } from './detailViews';

import utils from '../utils';

import { propublicaData } from '../static/propublicaData';


class ConfirmationPage extends React.Component {
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

    return (
      <Main>
        <DetailHero data={currentOrg.organization} />

        <div className="content-wrapper fullwidth">
          <div className="clearfix">

            <div className="pull-left col-half bg-green">
              <img src="/static/images/thank-you.jpg" className="img-responsive" />
              <div className="bg-green">
                <h1>Thank You!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>&nbsp;</p>
                <Row>
                  <Col xs={6}>
                    <Button bsStyle="default" bsSize="lg" block>
                      Email
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button bsStyle="default" bsSize="lg" block>
                      Print
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="pull-right col-half bg-dark-grey">
              <Well>
                <h1>Receipt</h1>
              </Well>
            </div>

          </div>
        </div>

      </Main>
    );
  }
}

// propTypes.
// ConfirmationPage.propTypes = {};

// Export.
export default ConfirmationPage;
