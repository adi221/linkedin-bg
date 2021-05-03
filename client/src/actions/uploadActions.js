import axios from 'axios';
import {
  SHOW_UPLOAD_MODAL,
  LIST_UPLOADED_ICONS,
  ADD_ICON_TO_LIST_REQUEST,
  ADD_ICON_TO_LIST_SUCCESS,
  ADD_ICON_TO_LIST_FAIL,
  ADD_ICON_TO_LIST_RESET,
  ADD_ICON_TO_LIST_REMOVE_ERROR_MSG,
} from '../constants';

export const showUploadModal = () => ({ type: SHOW_UPLOAD_MODAL });
export const resetAddIconState = () => ({ type: ADD_ICON_TO_LIST_RESET });
export const removeErrorMsg = () => ({
  type: ADD_ICON_TO_LIST_REMOVE_ERROR_MSG,
});

export const uploadIcon = formData => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_ICON_TO_LIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const { data } = await axios.post('/upload', formData, config);
    const { fileName, filePath } = data;

    const newIcon = {
      id: getState().product.allIcons.length + 1,
      name: fileName,
      img: `.${filePath}`,
    };
    console.log(newIcon);

    dispatch({ type: ADD_ICON_TO_LIST_SUCCESS });
    dispatch({ type: LIST_UPLOADED_ICONS, payload: newIcon });
    localStorage.setItem(
      'uploadedIcons',
      JSON.stringify(getState().product.uploadedIcons)
    );
  } catch (error) {
    dispatch({
      type: ADD_ICON_TO_LIST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
