import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class ImageSearchApp extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: searchTerm }
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          onSearchTermSubmit={this.onSearchSubmit}
          defaultSearchTerm=""
          title="Image Search"
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImageSearchApp;
