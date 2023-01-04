const PostcodeSearch = (props) => {
    const { inputValue, setInputValue, setSubmittedValue } = props;
    
    const handleChange = event => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setSubmittedValue(inputValue.toUpperCase());
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Postcode
                <input type="text" placeholder="Outcode only" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Search</button>
        </form>
    )
}

export default PostcodeSearch