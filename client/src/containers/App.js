import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import {
  Product,
  IconsContainer,
  ColorPicker,
  Download,
  Alert,
  UploadFile,
} from '../components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { showUploadModal } from '../actions/uploadActions';

function App() {
  // For download
  const downloadRef = useRef();

  const dispatch = useDispatch();
  const { show } = useSelector(state => state.upload);

  return (
    <div className='app'>
      <div className='app__left'>
        <h1>
          LinkedIn Background Generator <FaLinkedin />
        </h1>
        <div className='app__left-container'>
          <Product downloadRef={downloadRef} />
          <ColorPicker />
          <Download downloadRef={downloadRef} />
        </div>
        <a
          href='https://github.com/adi221/linkedin-bg-generate'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
      <div className='app__right'>
        <IconsContainer />
      </div>
      <Alert />
      {!show && (
        <button
          className='app__show-btn'
          onClick={() => dispatch(showUploadModal())}
        >
          Add icon
        </button>
      )}
      {show && <UploadFile />}
    </div>
  );
}

export default App;
