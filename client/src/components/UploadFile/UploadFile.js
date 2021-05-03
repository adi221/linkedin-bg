import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UploadFile.scss';
import { Message } from '../../components';
import { FaUpload, FaTimes } from 'react-icons/fa';
import {
  showUploadModal,
  uploadIcon,
  resetAddIconState,
  removeErrorMsg,
} from '../../actions/uploadActions';

const UploadFile = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File..');

  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(state => state.upload);

  const submitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    dispatch(uploadIcon(formData));
  };

  const inputHandler = e => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => dispatch(removeErrorMsg()), 3000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => dispatch(resetAddIconState()), 1000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  return (
    <>
      <div
        className='overlay'
        onClick={() => dispatch(showUploadModal())}
      ></div>
      <div className='upload-file'>
        <button
          className='upload-file__close'
          onClick={() => dispatch(showUploadModal())}
        >
          <FaTimes />
        </button>
        <h1>
          Upload File <FaUpload />
        </h1>
        <form className='upload-file__form' onSubmit={submitHandler}>
          <label htmlFor='uploadFile' className='upload-file__form-control'>
            <input
              type='file'
              id='uploadFile'
              onChange={inputHandler}
              accept='image/x-png,image/jpeg'
            />
            <span>{filename} </span>
          </label>

          <button onClick={submitHandler} className='upload-file__form-button'>
            Upload{' '}
            <span className='upload-file__form-preview'>
              {file && (
                <img src={URL.createObjectURL(file)} alt='uploaded-icon' />
              )}
            </span>
          </button>
          {loading && <Message type='info'>Loading</Message>}
          {success && <Message type='success'>Successfully uploaded</Message>}
          {error && <Message type='danger'>{error}</Message>}
        </form>
      </div>
    </>
  );
};

export default UploadFile;
