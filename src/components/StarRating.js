import React, { useState } from 'react';
import Star from './Star';
import '../css/style.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const getRatingText = () => {
    switch (rating) {
      case 1: return 'Poor';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Very good';
      case 5: return 'Excellent';
      default: return 'Rate Us!';
    }
  };

  return (
    <div className="star-rating">
      <h2>{getRatingText()}</h2>
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index}
          selected={rating > index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
