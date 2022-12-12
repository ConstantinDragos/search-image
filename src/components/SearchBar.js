import React, { Component } from 'react';
import {
  searchImages,
  fetchImagesWithPagination,
} from '../helpers/searchHelper';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', page: 1 };
    this.updateState = this.updateState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.updatePage = this.updatePage.bind(this);
  }

  updateState = (e) => {
    //add new state to the previous state
    this.setState({ page: 1, search: e.target.value });
  };

  updatePage = (e) => {
    //add new state to the previous state
    this.setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  };

  onClick = async () => {
    const images = await searchImages(this.state.search);
    this.props.onSearchSubmit(images);
  };

  onClick2 = async () => {
    const images = await fetchImagesWithPagination(
      this.state.search,
      this.state.page + 1
    );
    this.props.onSearchSubmit(images);
    this.updatePage();
  };

  render() {
    return (
      <div className='search'>
        <input value={this.state.search} onChange={this.updateState} />
        <button onClick={this.onClick}>Search</button>
        <button onClick={this.onClick2}>Search next page</button>
      </div>
    );
  }
}

export default SearchBar;
