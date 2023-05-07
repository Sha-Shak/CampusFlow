const FormResponse = require('../models/typeform/typeform.model');
const postTypeform = (req, res) => {
  const formResponse = req.body.form_response;
  console.log(formResponse);

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
      submittedat: response.submitted_at,
      name: response.answers[0].answer,
      email: response.answers[1].answer,
      phone: response.answers[2].answer,
    }));
    res.status(200).send(candidates);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postTypeform,
  getAllCandidates,
};
