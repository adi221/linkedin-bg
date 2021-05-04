import React from 'react';
import './SingleProductIcon.scss';
import { useSelector } from 'react-redux';

const SingleProductIcon = ({
  name,
  id,
  handleDrag,
  handleDrop,
  handleDragOver,
  handleDragEnd,
}) => {
  const { size, space } = useSelector(state => state.productSettings);

  const iconStyles = {
    fontSize: `${size.currentVal}px`,
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
      <i className={`single-product-icon devicon-${name} colored `}></i>
    </div>
  );
};

export default SingleProductIcon;
