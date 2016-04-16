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

// Validation.
Layout.propTypes = {
  children: React.PropTypes.node,
};

// Export.
export default Layout;
