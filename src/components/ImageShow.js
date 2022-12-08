import React from "react";

const ImageShow = (props) => {
  return (
    <div>
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default ImageShow;
