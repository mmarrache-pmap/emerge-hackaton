import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Define class.
class App extends React.Component {
  // Render method.
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

// Validation.
App.propTypes = {
  children: React.PropTypes.node
};

// Export.
export default App;
