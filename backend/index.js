// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('your_mongodb_connection_string', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Could not connect to MongoDB', err));

// // Sample route
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);

// });
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://pitstop:pitstop@cluster0.bonrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Could not connect to MongoDB Atlas', err));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});