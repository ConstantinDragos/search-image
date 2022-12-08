import React, { Component, useState } from 'react';
import searchImages from '../helpers/searchHelper';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.updateState = this.updateState.bind(this);
  }
  updateState = (e) => {
    this.setState({ search: e.target.value });
  };
  onClick = async () => {
    const images = await searchImages(this.state.search);
    this.props.onSearchSubmit(images);
  };
  render() {
    return (
      <div className='search'>
        <input value={this.state.search} onChange={this.updateState} />
        <button onClick={this.onClick}>Search</button>
      </div>
    );
  }
}

// const SearchBar = ({ onSearchSubmit }) => {
//   const [search, setSearch] = useState('');

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const onClick = async () => {
//     const images = await searchImages(search);
//     onSearchSubmit(images);
//   };

//   return (
//     <div className='search'>
//       <input value={search} onChange={handleChange} />
//       <button onClick={onClick}>Search</button>
//     </div>
//   );
// };

export default SearchBar;
