import React from 'react';
import { defineMessages, injectIntl } from 'react-intl'
import Book from './Book';

const MESSAGES = defineMessages({
  'Currently Reading': {
    id: 'book.shelf.currently.reading',
    defaultMessage: 'Currently Reading'
  },
  'Want to Read': {
    id: 'book.shelf.like.to.read',
    defaultMessage: 'Like to Read'
  },
  'Read': {
    id: 'book.shelf.completed',
    defaultMessage: 'Completed'
  }

});

const Bookshelf = props => {
  const { shelf, books, onChangeLocation, intl: { formatMessage } } = props;
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  console.log(shelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{formatMessage(MESSAGES[shelf.name])}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnThisShelf.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} onChangeLocation={onChangeLocation} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default injectIntl(Bookshelf);