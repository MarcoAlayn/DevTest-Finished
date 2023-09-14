import React from "react";
import Button from "@mui/material/Button";

const MaterialUIButton = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default MaterialUIButton;
