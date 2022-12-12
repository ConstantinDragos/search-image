import React, { Component } from 'react';

class ImageShow extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image.urls.regular}
          alt={this.props.image.alt_description}
          style={{ width: '100px', height: '100px' }}
        />
      </div>
    );
  }
}

export default ImageShow;
