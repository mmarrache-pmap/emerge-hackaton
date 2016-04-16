// Dependencies.
import React from 'react';

// Layout components.
import Main from '../layouts/main';


// Define class.
class PageNotFound extends React.Component {
  // Render method.
  render() {
    return (
      <Main>
        <div className="text-center" style={{ width: '30%', minWidth: 300, margin: '50px auto' }}>
          <h1 style={{ fontSize: '1000%', marginBottom: -20 }}>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, but the page you are looking for has not been found. Try checking the URL for error, then hit the refresh button on your browser.</p>
        </div>
      </Main>
    );
  }
}

// Export.
export default PageNotFound;
