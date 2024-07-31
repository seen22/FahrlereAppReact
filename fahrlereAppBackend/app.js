const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/api', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
