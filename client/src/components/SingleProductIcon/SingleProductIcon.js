import React from 'react';
import './SingleProductIcon.scss';
import { useSelector } from 'react-redux';

const SingleProductIcon = ({
  img,
  name,
  id,
  handleDrag,
  handleDrop,
  handleDragOver,
  handleDragEnd,
}) => {
  const { size, space } = useSelector(state => state.productSettings);

  const iconStyles = {
    width: `${size.currentVal}px`,
    height: `${size.currentVal}px`,
    marginLeft: `${space.currentVal}px`,
    marginRight: `${space.currentVal}px`,
  };

  return (
    <div
      className='single-product-icon'
      draggable={true}
      id={id}
      onDragOver={handleDragOver}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      style={iconStyles}
    >
      <img src={img} alt={name} />
    </div>
  );
};

export default SingleProductIcon;
