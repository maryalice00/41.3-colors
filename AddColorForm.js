import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useColors } from './ColorContext';

const AddColorForm = () => {
  const [newColor, setNewColor] = useState({ name: '', hex: '' });
  const [redirect, setRedirect] = useState(false);

  const { addColor } = useColors();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add validation for name and hex fields

    addColor({ id: Date.now().toString(), ...newColor });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <h2>Add Color</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input
            type="text"
            value={newColor.name}
            onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
          />
        </label>
        <label>
          Color Hex:
          <input
            type="text"
            value={newColor.hex}
            onChange={(e) => setNewColor({ ...newColor, hex: e.target.value })}
          />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default AddColorForm;
