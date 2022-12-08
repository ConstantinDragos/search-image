import React from "react";
import ImageShow from "./ImageShow";

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

export default ImageList;
