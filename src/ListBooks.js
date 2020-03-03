import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  render() {
    const { bookshelves, books, onChangeLocation } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>
            <FormattedMessage id="list.book.my.reads.header" defaultMessage="My Reads" />
          </h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves.map(shelf => (
              <Bookshelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                onChangeLocation={onChangeLocation}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button>
              <FormattedMessage id="list.book.add.book" defaultMessage="Add a Book" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;