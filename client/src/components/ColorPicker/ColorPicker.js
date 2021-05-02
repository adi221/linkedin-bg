import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ColorPicker.scss';
import { SketchPicker } from 'react-color';
import { updateBgColor } from '../../actions/productActions';

const ColorPicker = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const dispatch = useDispatch();

  const { bgColor } = useSelector(state => state.product);
  return (
    <div className='color-picker'>
      <div className='color-picker__control'>
        <div
          className='color-picker__control-btn'
          style={{ backgroundColor: bgColor }}
          onClick={() => setShowColorPicker(!showColorPicker)}
        ></div>
        <input
          type='text'
          value={bgColor}
          onChange={e => dispatch(updateBgColor(e.target.value))}
        />
      </div>
      {showColorPicker && (
        <div className='color-picker__container'>
          <SketchPicker
            color={bgColor}
            onChangeComplete={color => dispatch(updateBgColor(color.hex))}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
