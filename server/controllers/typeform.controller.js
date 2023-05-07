const postTypeform = async (req, res) => {
  const formResponse = req.body.form_response;
  console.log(formResponse);

  const newFormResponse = new FormResponse({
    form_id: formResponse.form_id,
    submitted_at: formResponse.submitted_at,
    answers: formResponse.answers.map((answer) => ({
      field: answer.field.id,
      answer: answer.text,
    })),
  });

  newFormResponse.save();
  res.send();
};
module.exports = {
  postTypeform,
};
