import mongoose from "mongoose";
const { Schema } = mongoose;

export const PlayerSchema = new Schema({
    mail: {type: String, require: true, index:true, unique:true, sparse:true},
    phone: {type: String, unique: true},
    name: String,
    ranking: String,
    position: Number,
    url: String,
}, {timestamps: true, collection: 'players'});