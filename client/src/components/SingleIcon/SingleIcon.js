import React from 'react';
import './SingleIcon.scss';
import { useDispatch } from 'react-redux';
import { addIconToProduct } from '../../actions/productActions';

const SingleIcon = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <div
      className='single-icon'
      onClick={() => dispatch(addIconToProduct({ id, name }))}
    >
      <i className={`single-icon devicon-${name} colored `}></i>
      <p>{name.split('-')[0]}</p>
    </div>
  );
};

export default SingleIcon;
