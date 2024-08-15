import express from 'express';
import multer from 'multer';

const app = express();
const port = 3003;

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Set the destination folder for uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for the uploaded image
  }
});
const upload = multer({ storage: storage });

// Route to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).send('Image uploaded successfully!'); // Send success response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
// import express from 'express';
// import multer from 'multer';
// import cors from 'cors'; // Import cors middleware

// const app = express();
// const port = 3003;

// // Use cors middleware
// app.use(cors());

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads');
//   },
//   filename: function (req, file, cb) {
//     const fileExtension = file.originalname.split('.').pop();
//     const newFilename = `${uniqueFilename}.${fileExtension}`;
//     cb(null, newFilename);
//   }
// });
// const upload = multer({ storage: storage });

// // Route to handle image upload
// app.post('/upload', upload.single('image'), (req, res) => {
//   res.status(200).send('Image uploaded successfully!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
