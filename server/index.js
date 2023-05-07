const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db/connection');
const studentsRoute = require('./routes/students.route');
const skillRoute = require('./routes/skill.route');
const githubRoute = require('./routes/github.route');
const typeformRoute = require('./routes/typeform.route');
const app = express();
const PORT = process.env.PORT || 8080;

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
app.use('/typeform', typeformRoute);

app.listen(PORT, () => {
  console.log(`🚀  Listening on port ${PORT}`);
});
