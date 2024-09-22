import React, { useState } from 'react'
import ColorPicker from 'react-pick-color';


const Squares = ({color, setColor}) => {
  return (
    <div>
        <ColorPicker color={color} onChange={color => setColor(color.hex)} />
    </div>
  )
}

export default Squares