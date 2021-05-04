import {
  PRODUCT_SETTINGS_UPDATE,
  PRODUCT_SETTINGS_IS_COLOR,
} from '../constants';

const initialState = {
  size: {
    name: 'size',
    title: 'Icon size',
    currentVal: 45,
    minVal: 35,
    maxVal: 55,
  },
  space: {
    name: 'space',
    title: 'Space between icons',
    currentVal: 10,
    minVal: 5,
    maxVal: 15,
  },
  showColoredIcons: true,
};

export const productSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SETTINGS_UPDATE:
      const { name, value } = action.payload;
      return { ...state, [name]: { ...state[name], currentVal: value } };
    case PRODUCT_SETTINGS_IS_COLOR:
      return { ...state, showColoredIcons: action.payload };
    default:
      return { ...state };
  }
};
