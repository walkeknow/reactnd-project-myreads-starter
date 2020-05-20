import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchBooksBar({handleTyping}) {
  return (
    <div className="search-books-bar">
      <Link to={{
        pathname:'/'
      }}>
        <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        placeholder="Search by title or author"
          onChange={(event)=>handleTyping(event.target.value)}
        />
      </div>
    </div>
  )
}

SearchBooksBar.propTypes = {
  handleTyping: PropTypes.func.isRequired
}

export default SearchBooksBar
