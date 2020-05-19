import React from 'react'
import LibraryTitle from './LibraryTitle'
import LibraryContent from './LibraryContent'
import OpenSearch from './OpenSearch'

function Library({libraryBooks}) {
  return (
    <div>
      <div className="list-books">
        <LibraryTitle></LibraryTitle>
        <LibraryContent libraryBooks={libraryBooks}></LibraryContent>
        <OpenSearch></OpenSearch>
      </div>

    </div>
  )
}

export default Library
