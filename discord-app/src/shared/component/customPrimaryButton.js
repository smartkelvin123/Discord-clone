import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({ label, addtionalStyles, disabled, onClick }) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#5865f2",
          color: "white",
          width: "100%",
          height: "40px",
          borderRadius: "5px",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "600",
        }}
        style={addtionalStyles ? addtionalStyles : {}}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomPrimaryButton;
