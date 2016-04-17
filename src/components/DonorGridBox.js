import React from 'react';
// import {connect} from 'react-redux';
import DonorGridBoxItem from './DonorGridBoxItem';

import utils from '../utils';


class DonorGridBox extends React.Component {
  render() {
    const { data } = this.props;
    const orgList = data.map( (item, index) => {
      return (
        <DonorGridBoxItem key={utils.unique()} data={item} />
      );
    });

    return (
      <ul className="nav masonry-grid">
        {orgList}
      </ul>
    );
  }
}

DonorGridBox.propTypes = {
  data: React.PropTypes.array,
  // dispatch: React.PropTypes.func,
  // propublica: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  // propublica: state.propublica,
});

// Export.
// export default connect(mapStateToProps)(DonorGridBox);
export default DonorGridBox;
