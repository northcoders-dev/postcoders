import React from 'react'

export default function Error({error}) {
 if(error) return (
    <div>Invalid Postcode</div>
  )
  return <div></div>
}
