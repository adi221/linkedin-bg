import {
  SHOW_UPLOAD_MODAL,
  UPLOAD_ICON_TO_LIST_REQUEST,
  UPLOAD_ICON_TO_LIST_FAIL,
  UPLOAD_ICON_TO_LIST_SUCCESS,
  UPLOAD_ICON_TO_LIST_RESET,
  UPLOAD_ICON_TO_LIST_REMOVE_ERROR_MSG,
} from '../constants';

export const uploadReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case SHOW_UPLOAD_MODAL:
      return { ...state, show: !state.show };
    case UPLOAD_ICON_TO_LIST_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_ICON_TO_LIST_SUCCESS:
      return { ...state, loading: false, success: true };
    case UPLOAD_ICON_TO_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UPLOAD_ICON_TO_LIST_RESET:
      return { show: false };
    case UPLOAD_ICON_TO_LIST_REMOVE_ERROR_MSG:
      return { show: true };
    default:
      return state;
  }
};
