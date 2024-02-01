import React from 'react';
import { Link } from 'react-router-dom';
import { useColors } from './ColorContext';

const ColorList = () => {
  const { colors } = useColors();

  return (
    <div>
      <h2>Colors List</h2>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Link to={`/colors/${color.id}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
