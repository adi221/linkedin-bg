import { PRODUCT_SETTINGS_UPDATE } from '../constants';

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
};

export const productSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SETTINGS_UPDATE:
      const { name, value } = action.payload;
      return { ...state, [name]: { ...state[name], currentVal: value } };
    default:
      return { ...state };
  }
};
