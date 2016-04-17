import React from 'react';
import Main from '../layouts/main';
import Hero from '../components/Hero';

import utils from '../utils';

import { propublicaData } from '../static/propublicaData';


class DonorPage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  render() {
    console.log(propublicaData);
    const organizations = propublicaData.filings;

    const orgList = organizations.map( (item, index) => {
      return (
        <li key={utils.unique()} className="masonry-box">
          <img src="http://placehold.it/600x300" className="img-responsive" />
          <div className="masonry-box-content">
            <a href="#" className="masonry-box-title">
              {item.organization.name}
            </a>
          </div>
        </li>
      );
    });

    return (
      <Main>
        <Hero type="image" src="/static/images/hero-donor.png" />
        <h1>Donor Page</h1>
        <ul className="nav masonry-grid">
          {orgList}
        </ul>
      </Main>
    );
  }
}

export default DonorPage;
