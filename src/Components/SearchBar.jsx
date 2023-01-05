import React, { useState } from 'react'

export const SearchBar = ({setPostcode}) => {

  const [newPostcode, setNewPostcode] = useState('')

const handleSubmit = (event)=>{
  event.preventDefault()
  if(newPostcode.match(/^([A-Z][A-Z]?\d\d?)$/i)){
    
    setPostcode(newPostcode)
  
    setNewPostcode('')
  }
else{
  window.alert("enter a valid postcode outcode")
}
}
  return (
   <form  onSubmit={handleSubmit}>
    <label htmlFor="postcode">Postcode search bar</label>
    <br>
    </br>
<input type="text"
placeholder='BB8'
 ref={input => input && input.focus()}
 id= 'postcode'
 value={newPostcode}
 onChange={(event)=> setNewPostcode(event.target.value)}

 />&nbsp;&nbsp;&nbsp;&nbsp;<button> Search a Postcode</button>
   </form>
  )
}
export default SearchBar