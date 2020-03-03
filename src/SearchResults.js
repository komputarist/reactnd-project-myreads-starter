import React from 'react';
import Book from './Book';

const SearchResults = props => {
  const { searchBooks, appBooks, onChangeLocation } = props;

  const updatedBooks = searchBooks.map(book => {
    appBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onChangeLocation={onChangeLocation}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;