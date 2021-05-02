import React from 'react';
import './SingleProductIcon.scss';

const SingleProductIcon = ({
  img,
  name,
  id,
  handleDrag,
  handleDrop,
  handleDragOver,
  handleDragEnd,
}) => {
  return (
    <div
      className='single-product-icon'
      draggable={true}
      id={id}
      onDragOver={handleDragOver}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
    >
      <img src={img} alt={name} />
    </div>
  );
};

export default SingleProductIcon;
