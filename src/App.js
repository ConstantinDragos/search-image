import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
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
};

export default App;
