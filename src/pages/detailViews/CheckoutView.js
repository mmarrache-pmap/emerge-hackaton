import React from 'react';

class CheckoutPanel extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-success text-normal">Please confirm your kindness of:</h1>
      </div>
    );
  }
}

CheckoutPanel.propTypes = {
  // title: React.PropTypes.string,
};

export default CheckoutPanel;