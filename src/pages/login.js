import React from 'react';
import Main from '../layouts/main';
import { fetchAuth } from '../redux/actions/auth-actions';
import { Grid, Row, Col, Alert, Panel, Button, ButtonInput } from 'react-bootstrap';

import utils from '../utils';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAuth(e){
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <form role="form" onSubmit={this.handleAuth.bind(this)}>
        <Row>
          <Col md={10} mdOffset={1}>

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input className="form-control" placeholder="Username" ref="loginName" name="loginName" type="text" autoFocus />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-lock"></i>
                </span>
                <input className="form-control" placeholder="Password" ref="password" name="password" type="password" />
              </div>
            </div>

            <ButtonInput type="submit" value="Login" bsStyle="primary" block />

          </Col>
        </Row>
      </form>
    );
  }
}

Login.propTypes = {
  onLogin: React.PropTypes.func
};

const mapStateToProps = (state) => {
  auth: state.auth;
}

export default Login;
