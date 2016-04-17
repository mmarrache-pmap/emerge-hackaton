// Dependencies.
import React from 'react';

class Loader extends React.Component {
  render() {
    const { theme, padding, size } = this.props;

    let color;
    switch (theme) {
    case 'dark':
      color = 'rgba(0,0,0,.5)';
      break;
    case 'light':
      color = '#00FF00';
      break;
    default:
      color = color;
    }

    const styles = {
      base: {
        textAlign: 'center',
        margin: padding
      },

      spinner: {
        display: 'inline-block',
        width: size,
        height: size,
      },

      circle: {
        backgroundColor: color,
      },
    };

    return (
      <div style={styles.base}>
        <div className="spinner--loader" style={styles.spinner}>
          <div className="spinner--loader--circle_1" style={styles.circle} />
          <div className="spinner--loader--circle_2" style={styles.circle} />
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  padding: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  size: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  theme: React.PropTypes.string
};

Loader.defaultProps = {
  padding: 40,
  size: 50,
  theme: 'light',
};

export default Loader;
