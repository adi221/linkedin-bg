import axios from 'axios';
import {
  SHOW_UPLOAD_MODAL,
  LIST_UPLOADED_ICONS,
  ADD_ICON_TO_LIST_REQUEST,
  ADD_ICON_TO_LIST_SUCCESS,
  ADD_ICON_TO_LIST_FAIL,
} from '../constants';

export const showUploadModal = () => ({ type: SHOW_UPLOAD_MODAL });

export const uploadIcon = formData => async (dispatch, getState) => {
  try {
    // dispatch({ type: ADD_ICON_TO_LIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const { data } = await axios.post('/upload', formData, config);
    const { fileName, filePath } = data;

    const newIcon = {
      id: new Date().getTime(),
      name: fileName,
      img: `.${filePath}`,
    };
    console.log(newIcon);

    dispatch({ type: LIST_UPLOADED_ICONS, payload: newIcon });
    localStorage.setItem(
      'uploadedIcons',
      JSON.stringify(getState().product.uploadedIcons)
    );
    // const newIcons = [...allIcons].push(newIcon);
    // console.log(newIcons);
    // dispatch({ type: ADD_ICON_TO_LIST_SUCCESS });
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
