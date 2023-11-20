const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    currentScene: {
        type: String,
        required: true
    },
    progress: {
        type: Map,
        of: String
    },
});

module.exports = mongoose.model('Game', gameSchema);
