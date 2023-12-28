import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        {this.props.children}
      </div>
    );
  }
}

export default Section;
