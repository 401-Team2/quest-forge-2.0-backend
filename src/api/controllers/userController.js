const User = require('../models/User');

const createUser = async (req, res) => {
    const { name, age, race, class: userClass } = req.body;

    try {
        const newUser = new User({ name, age, race, class: userClass });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

const getUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error: error.message });
    }
};

module.exports = {
    createUser,
    getUser
};
