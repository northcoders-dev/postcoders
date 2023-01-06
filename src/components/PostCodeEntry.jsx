import React from "react";
import TextField from "@mui/material/TextField";
import classes from "./PostcodeEntry.module.css";

const PostCodeEntry = ({ postcode, handleChangePostcode }) => {
  return (
    <TextField
      className={classes.textField}
      margin="normal"
      variant="filled"
      helperText="eg. M1, CH4, N13"
      label="Postcode"
      value={postcode}
      onChange={handleChangePostcode}
    />
  );
};

export default PostCodeEntry;
