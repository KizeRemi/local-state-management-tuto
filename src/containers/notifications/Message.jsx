import React, { Component } from 'react';
import { string, func, number } from 'prop-types';

class Message extends Component {
  static propTypes = {
    header: string.isRequired,
    onDismiss: func.isRequired,
    type: string.isRequired,
    content: string,
    ttl: number.isRequired,
  };

  static defaultProps = {
    error: false,
    warning: false,
    success: false,
    content: '',
    attached: false,
  }

  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setTimeout(this.props.onDismiss, this.props.ttl);
  }

  componentDidUpdate() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.props.onDismiss, this.props.ttl);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.props.onDismiss();
  }

  render() {
    const { header, content, onDismiss } = this.props;

    return (
      <div>
        <header>{header}</header>
        <div>{content}</div>
        <button onClick={onDismiss}>Fermer</button>
      </div>
    );
  }
}

export default Message;
