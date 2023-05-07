const FormResponse = require('../models/typeform/typeform.model');
const postTypeform = async (req, res) => {
  //   console.log('typeform', req.body);
  const formResponse = req.body;
  //   console.log(formResponse);

  const newFormResponse = new FormResponse({
    form_id: formResponse.form_id,
    submitted_at: formResponse.submitted_at,
    name: formResponse.answers[0].text,
    email: formResponse.answers[2].email,
    phone: formResponse.answers[3].phone_number,
  });

  newFormResponse.save();
  res.status(200).send('submitted successfully');
};

module.exports = {
  postTypeform,
};
