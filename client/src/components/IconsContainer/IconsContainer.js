import React from 'react';
import './IconsContainer.scss';
import { SingleIcon } from '..';
import { useSelector } from 'react-redux';

const IconsContainer = () => {
  const { allIcons } = useSelector(state => state.product);

  return (
    <div className='icons-container'>
      {allIcons.map(icon => {
        return <SingleIcon key={icon.id} {...icon} />;
      })}
    </div>
  );
};

export default IconsContainer;
