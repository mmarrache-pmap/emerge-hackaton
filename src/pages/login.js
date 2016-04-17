import React, { Component, PropTypes } from 'react';
import Main from '../layouts/main';
import { connect } from 'react-redux';
import { fetchAuth } from '../redux/actions/auth-actions';
import { Grid, Row, Col, Alert, Panel, Button, ButtonInput } from 'react-bootstrap';

import utils from '../utils';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    };
  }

  handleAuth(e){
    const { dispatch } = this.props;
    e.preventDefault();
    console.log("USER NAME: ",this.refs.loginName.value);
    console.log("PASSWORD: ",this.refs.password.value);
    // dispatch(fetchAuth(this.refs.loginName.value, this.refs.password.value));
    this.setState({
      user: this.refs.loginName.value
    });
  }
  render() {
    return (
      <div>
      { this.state.user === '' ?
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

            <ButtonInput type="submit" value="Login" bsStyle="success" block />

          </Col>
        </Row>
      </form> :
      <div>
        <p>Thank you for logging in {this.state.user}</p>
      </div>
      }
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object
};

const mapStateToProps = (state) => {
  auth: state.auth
};

export default connect(mapStateToProps)(Login);
