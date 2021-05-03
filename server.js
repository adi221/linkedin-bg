const express = require('express');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(fileUpload());

// Upload endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  // Ensure path is valid i.e. no spaces
  let fileType = file.name.substring(file.name.lastIndexOf('.'));
  let path =
    file.name.indexOf(' ') === -1
      ? file.name
      : file.name.substring(0, file.name.indexOf(' ')) + fileType;
  // Remove png/jpg suffix and shorten if neccesary
  let fileName = file.name
    .substring(0, file.name.lastIndexOf('.'))
    .substring(0, 10);

  let uploadsFile;
  if (process.env.NODE_ENV === 'development') {
    uploadsFile = `${__dirname}/client/public/uploads/${path}`;
  } else {
    uploadsFile = `${__dirname}/client/build/uploads/${path}`;
  }

  file.mv(uploadsFile, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({
      fileName,
      filePath: `/uploads/${path}`,
    });
  });
});

// For launching
const _dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, '/client/build')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('App is running');
  });
}

app.listen(PORT, () => console.log('Running on port 5000'));
