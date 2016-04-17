import React from 'react';
import {Panel, Button} from 'react-bootstrap';


class Template extends React.Component {
  render() {
    const title = this.props.title;
    const message = this.props.message;

    return (
      <div>
        <Panel header={title} bsStyle="success">
          <p className="msg">{message}</p>
          <p>
            <Button bsStyle="success">Button</Button>
            <span> and </span>
            <Button>Another Button</Button>
          </p>
        </Panel>
      </div>
    );
  }
}

Template.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string
};

export default Template;
