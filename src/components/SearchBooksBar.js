import React from 'react'
import { Link } from 'react-router-dom'

function SearchBooksBar() {
  return (
    <div className="search-books-bar">
      <Link to={{
        pathname:'/'
      }}>
        <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
  )
}

export default SearchBooksBar
