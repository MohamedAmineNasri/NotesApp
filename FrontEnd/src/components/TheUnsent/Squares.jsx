import React, { useState } from "react";
import ColorPicker from "react-pick-color";

const Squares = ({ color, setColor }) => {
  return (
    <div className="">
      <ColorPicker
        theme={{
          background: "lightgrey",
          inputBackground: "grey",
          borderColor: "darkgrey",
          borderRadius: "8px",
          color: "black",
          width: "320px",
        }}
        color={color}
        onChange={(color) => setColor(color.hex)}
      />
    </div>
  );
};

export default Squares;
