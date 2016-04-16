import React from 'react';
import Main from '../layouts/main';

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

    return (
      <Main>
        <h1>Donor Page</h1>
      </Main>
    );
  }
}

export default DonorPage;
