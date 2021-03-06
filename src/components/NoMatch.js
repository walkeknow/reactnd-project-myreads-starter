import React from 'react'

function NoMatch({ location }) {
  return (
    <div>
      <p className='no-match'>
        Sorry! We found no matches for <code>{location.pathname}</code>.
      </p>
    </div>
  )
}

export default NoMatch
