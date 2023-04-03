import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0,
    },
    transactionHash: {
        type: String,
        required: true
    },
    walletAddress: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema)