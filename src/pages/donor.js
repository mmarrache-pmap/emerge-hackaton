import React from 'react';
import Main from '../layouts/main';
import Hero from '../components/Hero';
import Loader from '../components/Loader';

import utils from '../utils';

import { propublicaData } from '../static/propublicaData';


class DonorPage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  handleBoxClick(ein) {
    console.log(ein);
  }

  render() {
    console.log(propublicaData);
    const organizations = propublicaData.filings;

    const orgList = organizations.map( (item, index) => {
      return (
        <li key={utils.unique()} className="masonry-box">
          <a href={`/detail/${item.ein}`} className="masonry-box-image-link">
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
      <Main>
        <Hero type="image" src="/static/images/hero-donor.png"
              title="Conquering homelessness is a shared responsibility" />
        <h1>Donor Page</h1>
        <ul className="nav masonry-grid">
          {orgList}
        </ul>
      </Main>
    );
  }
}

export default DonorPage;
