import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';

class SearchBooks extends Component {
  render() {
    const {
      searchBooks,
      appBooks,
      onSearch,
      onResetSearch,
      onChangeLocation
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              <FormattedMessage id="search.books.close.text" defaultMessage="Close" />
            </button>
          </Link>
          <SearchBooksInput onSearch={onSearch} />
        </div>
        <SearchResults
          searchBooks={searchBooks}
          appBooks={appBooks}
          onChangeLocation={onChangeLocation}
        />
      </div>
    );
  }
}

export default SearchBooks;