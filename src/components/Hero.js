import React from 'react';

class Hero extends React.Component {
  render() {
    const { type, src, title, overlay } = this.props;

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
        :
          <h1 className={`hero-title ${overlay ? 'overlay' : ''}`}>{title}</h1>
        }
      </div>
    );
  }
}

Hero.propTypes = {
  type: React.PropTypes.oneOf(['image', 'video']),
  src: React.PropTypes.string,
  title: React.PropTypes.string,
  overlay: React.PropTypes.bool,
};

Hero.defaultProps = {
  title: '',
  overlay: false
};

export default Hero;
