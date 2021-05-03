import {
  SHOW_UPLOAD_MODAL,
  ADD_ICON_TO_LIST_REQUEST,
  ADD_ICON_TO_LIST_FAIL,
  ADD_ICON_TO_LIST_SUCCESS,
  ADD_ICON_TO_LIST_RESET,
  ADD_ICON_TO_LIST_REMOVE_ERROR_MSG,
} from '../constants';

export const uploadReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case SHOW_UPLOAD_MODAL:
      return { ...state, show: !state.show };
    case ADD_ICON_TO_LIST_REQUEST:
      return { ...state, loading: true };
    case ADD_ICON_TO_LIST_SUCCESS:
      return { ...state, loading: false, success: true };
    case ADD_ICON_TO_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_ICON_TO_LIST_RESET:
      return { show: false };
    case ADD_ICON_TO_LIST_REMOVE_ERROR_MSG:
      return { show: true };
    default:
      return state;
  }
};
