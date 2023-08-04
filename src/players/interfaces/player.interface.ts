import { Document } from "mongoose";

export interface Player extends Document {
    name: String,
    mail: String,
    phone: String,
    ranking: String,
    position: Number,
    url: String,
}
