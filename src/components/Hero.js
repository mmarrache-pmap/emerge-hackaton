import React from 'react';


class Hero extends React.Component {
  render() {
    const { type, src } = this.props;

    const styles = {
      base: {
        background: type === "image" ? `url(${src}) no-repeat center`: '',
        backgroundSize: 'cover'
      }
    };

    return (
      <div className="hero" style={styles.base}>
        {type === "video" ?
          <h1>Video</h1>
        : null }
      </div>
    );
  }
}

Hero.propTypes = {
  type: React.PropTypes.oneOf(['image', 'video']),
  src: React.PropTypes.string,
};

export default Hero;
