import React from "react";
import Button from "@mui/material/Button";

const SubmitButton = ({ handleOnClick }) => {
  return (
    <Button variant="contained" onClick={handleOnClick}>
      Submit
    </Button>
  );
};

export default SubmitButton;
