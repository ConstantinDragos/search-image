import { Component, useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

class App extends Component{
  constructor(props){
    super(props)
    this.state = { images: []};

  }

  onSearchSubmit = (imagesList) => {
    this.setState({images : imagesList});
  }

  render(){
    return (
      <div className="App">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
/*const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = (imagesList) => {
    setImages(imagesList);
  };

  return (
    <div className="App">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};*/

export default App;

