import {
  ADD_ICON_TO_PRODUCT,
  UPDATE_BG_COLOR,
  SET_ALERT,
  SET_ICONS,
} from '../constants';

export const saveNewIcons = payload => ({
  type: SET_ICONS,
  payload,
});

export const updateBgColor = payload => ({ type: UPDATE_BG_COLOR, payload });

export const setAlert = payload => ({ type: SET_ALERT, payload });

export const addIconToProduct = id => (dispatch, getState) => {
  const {
    product: { allIcons, productIcons },
  } = getState();

  if (productIcons.length === 5) {
    dispatch(setAlert({ show: true, msg: 'Until 5 Icons' }));
    return;
  }

  const isIconExists = productIcons.find(icon => icon.id === id);
  if (isIconExists) {
    dispatch(setAlert({ show: true, msg: 'Icon was already selected' }));
  } else {
    const curIcon = allIcons.find(icon => icon.id === id);
    curIcon.order = productIcons.length;
    dispatch({ type: ADD_ICON_TO_PRODUCT, payload: curIcon });
  }
};
