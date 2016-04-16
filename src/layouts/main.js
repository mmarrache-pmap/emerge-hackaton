import React from 'react';
import { connect } from 'react-redux';

import utils from '../utils';


class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
