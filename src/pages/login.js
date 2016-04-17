import React from 'react';
import Main from '../layouts/main';

import utils from '../utils';


class Login extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    // utils.title(props);
  }

  render() {
    return (
      <div className='row'>
        <p><input placeholder='Username' ref='username' type='text'/></p>
        <p><input placeholder='Password' ref='password' type='password'/></p>
        <p>
          <button>Sign In</button>
          <button>Sign Up</button>
        </p>
      </div>
    );
  }
}

export default Login;
