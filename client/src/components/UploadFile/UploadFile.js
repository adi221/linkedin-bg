import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './UploadFile.scss';
import { FaUpload, FaTimes } from 'react-icons/fa';
import { showUploadModal, uploadIcon } from '../../actions/uploadActions';
import axios from 'axios';

const UploadFile = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File..');
  // const [message, setMessage] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    dispatch(uploadIcon(formData));
  };

  // const submitHandler = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const res = await axios.post('/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     const { fileName, filePath } = res.data;
  //     console.log(fileName);
  //     console.log(filePath);
  //     setUploadedFile({ fileName, filePath });
  //   } catch (error) {
  //     if (error.response.status === 500) {
  //       console.log('There was a problem with the server');
  //     } else {
  //       console.log(error.response.data.msg);
  //     }
  //   }
  // };

  const inputHandler = e => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

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
            <input type='file' id='uploadFile' onChange={inputHandler} />
            <span>{filename}</span>
          </label>
          <button type='submit' className='upload-file__form-button'>
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadFile;
