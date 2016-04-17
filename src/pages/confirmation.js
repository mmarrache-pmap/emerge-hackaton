import React from 'react';
import {connect} from 'react-redux';
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
    const { params, deposit } = this.props;
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
          <div className="clearfix col-half-wrapper">

            <div className="pull-left col-half">
              <img src="/static/images/thank-you.jpg" className="thank-you-image" />
              <h1>Thank You!</h1>
              <p>Your transaction was successfully completed. Please make sure to save this receipt for your taxes return purposes.</p>
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
              <p>&nbsp;</p>
            </div>

            <div className="pull-right col-half">
              <Well>
                <h1 className="text-center">Receipt</h1>
                <p className="text-center">
                  Transaction Date/Time 2016-04-17 06:36:30 AM EST
                  Transaction: 23423432
                </p>

                <p>&nbsp;</p>
                <h5>BENEFICIARY</h5>
                <h3>Highlands County Coalition for the Homeless, Inc.</h3>
                <p>
                  PO Box 1359, Avon Park, FL 33826-1359 <br/>
                  Tax-Exempt since Jan. 2004 <br/>
                  EIN: 51-0466286
                </p>

                <p>&nbsp;</p>
                <h5>AMOUNT DONATED</h5>
                <h1 className="text-center text-left-sm amount-donated">
                  ${deposit}
                </h1>

                <p>&nbsp;</p>
                <h5>GOODS FULFILLED</h5>
                <ul>
                  <li>18-Pack White Washcloths</li>
                  <li>Microfiber Pillow, 2 Pack</li>
                  <li>Adult Sleeping Bag</li>
                  <li>Dial Antibacterial Soap, 10 count</li>
                  <li>Bounty Paper Towel Mega Rolls, 12-count</li>
                </ul>
              </Well>
            </div>

          </div>
        </div>

      </Main>
    );
  }
}

// propTypes.
ConfirmationPage.propTypes = {
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  deposit: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  deposit: state.deposit
});

// Export.
export default connect(mapStateToProps)(ConfirmationPage);
