import { Component } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = (imagesList) => {
    this.setState({ images: imagesList });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
