import {
  ADD_ICON_TO_PRODUCT,
  UPDATE_BG_COLOR,
  SET_ICONS,
  LIST_ICONS,
} from '../constants';
import allIcons from '../data/imgIcons';

export const productReducer = (
  state = { productIcons: [], bgColor: '#181717', allIcons, alert: false },
  action
) => {
  switch (action.type) {
    case ADD_ICON_TO_PRODUCT:
      return {
        ...state,
        productIcons: [...state.productIcons, action.payload],
      };
    case SET_ICONS:
      return { ...state, productIcons: action.payload };
    case LIST_ICONS:
      return { ...state, allIcons: action.payload };
    case UPDATE_BG_COLOR:
      console.log('Yes');
      return { ...state, bgColor: action.payload };
    default:
      return { ...state };
  }
};
