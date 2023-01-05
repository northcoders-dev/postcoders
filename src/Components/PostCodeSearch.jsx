import { useState, props} from 'react'
import { getAreaData } from '../api'
import { InfoCard } from './InfoCard';

export const PostCodeSearch = () =>{
    
    const [postCode, setPostCode] =useState({})
    const [input, setInput] = useState('');

    // if (Object.keys(postCode).length > 0){

    //     let {latitude, longitude, state, ['place name']: placeName, ['state abbreviation']: stateAbbreviation}= postCode[0]
    //     console.log('destructuring', latitude, longitude, state,  placeName, stateAbbreviation)
    //         } 


    const handleChange = (event) => {
        setInput(event.target.value);
      };
      

const handleSubmit = () =>{
    getAreaData(input).then((res)=>{
        setPostCode(res)
        console.log('info', postCode[0])
    }).catch((error)=>{
        console.log(error)
    }) 
}


  return <div>
    <button onClick={handleSubmit}>Search</button>
<input  placeholder="enter postcode" type="text" id="postcode" onChange={handleChange}/>
    <h2>{`Areas for postcode ${input}: ${postCode.length}`}</h2>
    <InfoCard PostCodeinfo={postCode}/>
  </div>

}