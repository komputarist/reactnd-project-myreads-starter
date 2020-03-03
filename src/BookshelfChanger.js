import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';

const MESSAGES = defineMessages({
  moveBook: {
    id: 'book.shelf.changer.move.book',
    defaultMessage: 'Move book'
  },
  currentlyReading: {
    id: 'book.shelf.changer.currently.reading',
    defaultMessage: 'Currently Reading'
  },
  wantToRead: {
    id: 'book.shelf.changer.like.to.read',
    defaultMessage: 'Like to Read'
  },
  completed: {
    id: 'book.shelf.changer.completed',
    defaultMessage: 'Completed'
  },
  remove: {
    id: 'book.shelf.changer.remove',
    defaultMessage: 'Remove'
  }

});

class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };
  handleChange = event => {
    const { onChangeLocation, book } = this.props;
    const { value } = event.target;
    this.setState({ value });
    onChangeLocation(book, value);
  };
  render() {
    const { intl: { formatMessage } } = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            {formatMessage(MESSAGES.moveBook)}
          </option>
          <option value="currentlyReading">
            {formatMessage(MESSAGES.currentlyReading)}
          </option>
          <option value="wantToRead">
            {formatMessage(MESSAGES.wantToRead)}
          </option>
          <option value="read">
            {formatMessage(MESSAGES.completed)}
          </option>
          <option value="none">
            {formatMessage(MESSAGES.remove)}
          </option>
        </select>
      </div>
    );
  }
}

export default injectIntl(BookshelfChanger);