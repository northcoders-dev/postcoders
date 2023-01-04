import React, {useEffect, useState} from 'react'
import {getByPostCode} from './api';

function Input ({postcode, setPostcode}) {
   
    const handleChange = (event) => {
        setPostcode(event.target.value);
       
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
   
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Enter the first 2 index of your postcode</label>
                    <input type="text" onChange={handleChange} value={postcode} />
                    <button type="submit"> search</button>
                </form>
            </div>
        )
    }

export default Input