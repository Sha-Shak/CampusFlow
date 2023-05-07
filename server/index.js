const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db/connection');
const studentsRoute = require('./routes/students.route');
const skillRoute = require('./routes/skill.route');
const githubRoute = require('./routes/github.route');
const app = express();
const PORT = 3001;

require('dotenv').config();

app.use(bodyParser.json({ limit: '50mb' })); // for uploading large file in cloudinary

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());
app.use('/github', githubRoute);
app.use('/students', studentsRoute);
app.use('/skill', skillRoute);

app.listen(PORT, () => {
  console.log(`🚀  Listening on port ${PORT}`);
});
