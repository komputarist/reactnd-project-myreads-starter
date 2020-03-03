import React, { Component } from 'react';
import { defineMessages, injectIntl } from 'react-intl';

const MESSAGE = defineMessages({
  search: {
    id: 'search.books.input.placeholder.text',
    defaultMessage: 'Search by title or author'
  }
});

class SearchBooksInput extends Component {
  state = {
    value: '',
  };
  handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder={this.props.intl.formatMessage(MESSAGE.search)}
          onChange={this.handleChange}
          autoFocus
        />
      </div>
    );
  }
}

export default injectIntl(SearchBooksInput);