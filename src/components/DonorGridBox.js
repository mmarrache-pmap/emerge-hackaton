import React from 'react';
// import {connect} from 'react-redux';

import utils from '../utils';


class DonorGridBox extends React.Component {
  render() {
    const { data } = this.props;
    const orgList = data.map( (item, index) => {
      return (
        <li key={utils.unique()} className="masonry-box">
          <a href={`/detail/${data.ein}`} className="masonry-box-image-link">
            <img src={`/static/images/organizations/${item.organization.photo}`} className="img-responsive" />
          </a>
          <div className="ribbon-circle masonry-box-total">
            <span>{item.organization.price || '25'}</span>
          </div>
          <div className="masonry-box-content">
            <div className="text-muted clearfix">
              <div className="pull-left">
                {`${item.organization.city}, ${item.organization.state}`}
              </div>
              <div className="pull-right text-right">
                EIN: {item.ein}
              </div>
            </div>
            <a href={`/detail/${item.ein}`} className="masonry-box-title">
              {item.organization.name}
            </a>

            {/*
            <div className="text-center">
              <Loader padding={40} theme="dark" />
            </div>
            */}

            <div className="masonry-box-list">
              <span className="text-muted">Goods needed:</span>
              <ul className="square-bullets">
                <li>18-pack White Washcloths</li>
                <li>Microfiber Pillow, 2 Pack</li>
                <li>Adult Sleeping bag</li>
              </ul>
            </div>

            <div>
              <span className="text-muted">
                One-Click Donation by
                {' '}
                <img src="/static/images/visa-direct-small-grey.png"
                     style={{ width: 'auto', height: 10, verticalAlign: 'middle' }} />
              </span>

            </div>

          </div>
        </li>
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
