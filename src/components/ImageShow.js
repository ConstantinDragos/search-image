import React from "react";
import {Component} from "react";
class ImageShow extends Component{
  constructor(props){
    super(props)
    
    
  }

  render(){
    return (
      <div>
        <img
          src={this.props.image.urls.regular}
          alt={this.props.image.alt_description}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    );
  }
}
/*const ImageShow = (props) => {
  return (
    <div>
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};*/

export default ImageShow;
