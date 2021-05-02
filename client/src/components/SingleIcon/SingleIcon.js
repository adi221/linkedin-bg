import React from 'react';
import './SingleIcon.scss';
import { useDispatch } from 'react-redux';
import { addIconToProduct } from '../../actions/productActions';

const SingleIcon = ({ id, name, img }) => {
  const dispatch = useDispatch();

  return (
    <div className='single-icon' onClick={() => dispatch(addIconToProduct(id))}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SingleIcon;
