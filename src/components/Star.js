import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onClick }) => {
  return (
    <FaStar
      color={selected ? "#daa520" : "#789"}
      onClick={onClick}
      style={{ cursor: 'pointer', fontSize: '60px' }} 
    />
  );
};

export default Star;
