import React from 'react';
import './ImgContainer.scss';
import { SingleIcon } from '..';
import { useSelector } from 'react-redux';

const ImgContainer = () => {
  const { allIcons } = useSelector(state => state.product);

  return (
    <div className='img-container'>
      {allIcons.map(icon => {
        return <SingleIcon key={icon.id} {...icon} />;
      })}
    </div>
  );
};

export default ImgContainer;
