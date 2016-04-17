import React from 'react';
import { Link } from 'react-router';
import PriceButtons from './PriceButtons';

import utils from '../utils';


class DonorGridBoxItem extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(data);

    const products = data.organization.products;
    let prices = [];
    products.map( (product) => {
      prices.push(product.price);
    });

    let total = 0;
    prices.forEach( price => {
      return total += price;
    });
    // console.log(prices, total);

    const productsList = products.map( product => {
      return <li key={utils.unique()}>{product.item}</li>;
    });

    return (
      <li className="masonry-box">
        <Link to={`/detail/${data.id}`} className="masonry-box-image-link">
          <img src={`/static/images/organizations/${data.organization.photo}`} className="img-responsive" />
        </Link>
        <div className="ribbon-circle masonry-box-total">
          <span>{Math.ceil(total)}</span>
        </div>
        <div className="masonry-box-content">
          <div className="text-muted clearfix">
            <div className="pull-left">
              {`${data.organization.city}, ${data.organization.state}`}
            </div>
            <div className="pull-right text-right">
              EIN: {data.ein}
            </div>
          </div>
          <Link to={`/detail/${data.id}`} className="masonry-box-title">
            {data.organization.name}
          </Link>

          {/*
          <div className="text-center">
            <Loader padding={40} theme="dark" />
          </div>
          */}

          <div className="masonry-box-list">
            <span className="text-muted">Goods needed:</span>
            <ul className="square-bullets">
              {productsList}
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

          <PriceButtons id={data.id} total={Math.ceil(total)} />

        </div>
      </li>
    );
  }
}

DonorGridBoxItem.propTypes = {
  data: React.PropTypes.object
};

export default DonorGridBoxItem;
