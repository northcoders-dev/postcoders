const Error = (props) => {
    const {error} = props;
    console.log(error)
    return error ? <h2>Please provide a valid postcode</h2> : <></>
}

export default Error