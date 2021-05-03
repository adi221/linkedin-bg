const express = require('express');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(fileUpload());

// Upload endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  // Ensure path is valid i.e. no spaces
  let path =
    file.name.indexOf(' ') === -1
      ? file.name
      : file.name.substring(0, file.name.indexOf(' '));
  // Remove png/jpg suffix and shorten if neccesary
  let fileName = file.name
    .substring(0, file.name.lastIndexOf('.'))
    .substring(0, 10);

  file.mv(`${__dirname}/client/public/uploads/${path}`, err => {
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

app.listen(5000, () => console.log('Running on port 5000'));
