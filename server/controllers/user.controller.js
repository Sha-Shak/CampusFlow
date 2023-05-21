const User = require('../models/user/user.model');

const check = async (req, res) => {
  await res.send('test');
};

// TODO: rename it to createOrgsMembers
const createUser = async (req, res) => {
  const { name, email, role, githubUsername } = req.body;

  try {
    // get user by id

    const existUser = await User.findOne({ email });
    if (existUser) {
      console.log('user exists', existUser);
      res.status(201).json({
        success: true,
        data: existUser,
        message: 'User already exists',
      });
    } else {
      let user = new User({
        name,
        email,
        role,
        githubUsername,
      });
      await user.save();
      res
        .status(201)
        .json({ success: true, data: user, message: 'User created' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error here' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = {
  check,
  createUser,
  getAllUsers,
  getUserById,
};
