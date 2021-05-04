import React, { useEffect } from 'react';
import './IconsContainer.scss';
import { SingleIcon } from '..';
import { useSelector, useDispatch } from 'react-redux';
import { getAllIcons } from '../../actions/productActions';

const IconsContainer = () => {
  const { filteredIcons } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const deviconsUrl =
    'https://raw.githubusercontent.com/devicons/devicon/master/icomoon.json';

  useEffect(() => {
    dispatch(getAllIcons(deviconsUrl));
  }, [dispatch]);

  return (
    <div className='icons-container'>
      {filteredIcons.map(icon => {
        return <SingleIcon key={icon.id} {...icon} />;
      })}
    </div>
  );
};

export default IconsContainer;
