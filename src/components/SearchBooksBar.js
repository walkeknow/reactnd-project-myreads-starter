import React from 'react'
import { Link } from 'react-router-dom'

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

export default SearchBooksBar
