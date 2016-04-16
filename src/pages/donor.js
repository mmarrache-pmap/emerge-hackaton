import React from 'react';
import Main from '../layouts/main';

// Define class.
class Home extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    // Set page title.
    utils.title(props);
  }

  onTreeViewClick(node) {
    console.log(node.name, node.selected);
  }

  // Render method.
  render() {
    return (
      <Main>
        <h1>Donor Page</h1>
      </Main>
    );
  }
}

// Export.
export default Home;
