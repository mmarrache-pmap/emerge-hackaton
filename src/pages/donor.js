import React from 'react';
import Main from '../layouts/main';

import utils from '../utils';


class DonorPage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  onTreeViewClick(node) {
    console.log(node.name, node.selected);
  }

  render() {
    return (
      <Main>
        <h1>Donor Page</h1>
      </Main>
    );
  }
}

export default DonorPage;
