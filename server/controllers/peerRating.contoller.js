const PeerRating = require('../models/student/peerRating.model');

const addRating = async (req, res) => {
  const { id } = req.params;
  try {
    const { givenTo, rate, description } = req.body;
    const ratingGiven = await PeerRating.find({
      givenTo,
      givenBy: id,
    });
    console.log(ratingGiven);
    if (ratingGiven.length > 0) {
      const updateRating = await PeerRating.findOneAndUpdate(
        { givenTo: givenTo, givenBy: id },
        {
          $set: {
            rate: rate,
            description: description,
            count: ratingGiven[0].count + 1,
          },
        },
        {
          new: true,
        }
      );
      await updateRating.save();
      return res.status(200).json({
        message: 'Rating Updated',
        data: updateRating,
      });
    } else {
      const newRating = new PeerRating({
        givenBy: id,
        givenTo: givenTo,
        rate: rate,
        description: description,
      });
      const savedRating = await newRating.save();
      res.status(200).json(savedRating);
    }
    // const newRating = new PeerRating({
    //   givenBy: id,
    //   givenTo: givenTo,
    //   rate: rate,
    //   description: description,
    // });
    // const savedRating = await newRating.save();
    // res.status(200).json(savedRating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get givento rating
const getRating = async (req, res) => {
  const { id } = req.params;
  try {
    const rating = await PeerRating.find({ givenTo: id });
    res.status(200).json(rating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addRating,
  getRating,
};
