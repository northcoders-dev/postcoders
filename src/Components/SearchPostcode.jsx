const searchPostcode=(props)=>{
const {value, setValue, setNewValue} = props;

const HandleChange=(event)=>{
    setValue(event.target.value)
};

const HandleSubmit=(event)=>{
    event.preventDefault();
    setNewValue(value)
}

    return  <div>
        <form className = "form" onSubmit={HandleSubmit}>
            <label className="label">Please enter the first part of a postcode<input className="input"type="text" value={value} onChange={HandleChange}/></label>
            <button className="submitBtn" type="submit">Search my Postcode</button>
        </form>
    </div>
}

export default searchPostcode