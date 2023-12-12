const express = require('express')
const port = 5000

const mongoose = require('mongoose');

const uri = `mongodb+srv://mahesh:mahesh@cluster0.5fcpf5q.mongodb.net/mernapp`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
