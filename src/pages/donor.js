import React from 'react';
import Main from '../layouts/main';
import Hero from '../components/Hero';
import DonorGridBox from '../components/DonorGridBox';

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

    return (
      <Main>
        <Hero type="image" src="/static/images/hero-donor.jpg" overlay
              title="Conquering homelessness is a shared responsibility" />

        <br/>
        <DonorGridBox data={propublicaData.filings} />


      </Main>
    );
  }
}

export default DonorPage;
