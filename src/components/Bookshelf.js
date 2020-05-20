import React, { Component } from 'react'
import BookList from './BookList'

class Bookshelf extends Component {
  state = {
    books: []
  }

  render() {
    const { title } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BookList books={this.state.books}></BookList>
        </div>
      </div>
    )
  }

}

export default Bookshelf
