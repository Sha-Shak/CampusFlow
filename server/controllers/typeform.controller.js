const FormResponse = require('../models/typeform/typeform.model');
const postTypeform = (req, res) => {
  const formResponse = req.body.form_response;

  const newFormResponse = new FormResponse({
    form_id: formResponse.form_id,
    submitted_at: formResponse.submitted_at,
    answers: formResponse.answers.map((answer) => ({
      field: answer.field.id,
      answer: answer[answer.type],
    })),
  });

  newFormResponse.save();
  res.send();
};

const getAllCandidates = async (req, res) => {
  try {
    const allResponses = await FormResponse.find();
    const candidates = allResponses.map((response) => ({
      id: response._id,
      submittedate: response.submitted_at,
      name: response.answers[0].answer,
      email: response.answers[1].answer,
      phone: response.answers[2].answer,
    }));
    res.status(200).send(candidates);
  } catch (error) {
    console.log(error);
  }
};
const getCandidateById = async (req, res) => {
  try {
    const candidateRaw = await FormResponse.findById(req.params.id);
    const candidate = {
      id: candidateRaw._id,
      submittedate: candidateRaw.submitted_at,
      name: candidateRaw.answers[0].answer,
      email: candidateRaw.answers[1].answer,
      phone: candidateRaw.answers[2].answer,
    };
    res.status(200).send(candidate);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postTypeform,
  getAllCandidates,
  getCandidateById,
};
