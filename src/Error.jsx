import React from 'react'

export default function Error({error}) {
 if(error) return (
    <div>{error.message}</div>
  )
  return <div></div>
}
