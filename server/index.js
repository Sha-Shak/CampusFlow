const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db/connection');
const studentsRoute = require('./routes/students.route');
const skillRoute = require('./routes/skill.route');
const githubRoute = require('./routes/github.route');
const typeformRoute = require('./routes/typeform.route');
const userRouter = require('./routes/user.route');
const projectsRoute = require('./routes/project.route');
const peerRatingRoute = require('./routes/peerRating.route');
const cohortRoute = require('./routes/cohort.route');
const alumniRoute = require('./routes/alumni.route');
const apiRoute = require('./routes/api.route');
const hrRoute = require('./routes/hr.route');
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
app.use('/student', studentsRoute);
app.use('/skill', skillRoute);
app.use('/typeform', typeformRoute);
app.use('/user', userRouter);
app.use('/projects', projectsRoute);
app.use('/peerRating', peerRatingRoute);
app.use('/cohort', cohortRoute);
app.use('/alumni', alumniRoute);
app.use('/api', apiRoute);
app.use('/hr', hrRoute);

app.listen(PORT, () => {
  console.log(`🚀  Listening on port ${PORT}`);
});
