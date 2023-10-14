// ColorPicker.js
import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        style={{
          backgroundColor: selectedColor,
          width: '100px',
          height: '100px',
        }}
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
