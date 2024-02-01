// New ColorContext.js

import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState([
    { id: '1', name: 'Red', hex: '#FF0000' },
    { id: '2', name: 'Green', hex: '#00FF00' },
    // ... other colors
  ]);

  const addColor = (newColor) => {
    setColors((prevColors) => [newColor, ...prevColors]);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
};

export { ColorProvider, useColors };
