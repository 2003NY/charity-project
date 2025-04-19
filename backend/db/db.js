const mongoose = require('mongoose');

// Define the log schema to track donations and transfers
const logSchema = new mongoose.Schema({
    donorAddress: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Deposited', 'Transferred'],
        default: 'Deposited',
    },
});

const Log = mongoose.model('Log', logSchema);

// Define the transfer log schema to track fund transfers
const transferLogSchema = new mongoose.Schema({
    recipientAddress: {
        type: String,
        required: true,
    },
    transferredAmount: {
        type: Number,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const TransferLog = mongoose.model('TransferLog', transferLogSchema);

// Export the models
module.exports = { Log, TransferLog };
