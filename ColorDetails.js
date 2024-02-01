import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useColors } from './ColorContext';

const ColorDetails = () => {
  const { colorId } = useParams();
  const { colors } = useColors();
  const color = colors.find((c) => c.id === colorId);

  if (!color) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <h2>{color.name}</h2>
      <div style={{ backgroundColor: color.hex, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default ColorDetails;
