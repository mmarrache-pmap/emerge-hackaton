import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
			<div>
        <Grid>
          <Row>
            <Col xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
			</div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
