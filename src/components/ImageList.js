import React from 'react';
import ImageShow from './ImageShow';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imagesList = this.props.images.map((image) => {
      return <ImageShow key={image.id} image={image} />;
    });
    return (
      <div
        style={{
          columns: '5 100px',
          columnGap: '10px',
        }}
      >
        {imagesList}
      </div>
    );
  }
}
export default ImageList;
/*
const ImageList = (props) => {
  const imagesList = props.images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <div
      style={{
        columns: "5 100px",
        columnGap: "10px",
      }}>
      {imagesList}
    </div>
  );
};

export default ImageList;*/
