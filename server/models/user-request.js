import mongoose from "mongoose";
import { Schema } from "mongoose";

const fantasyChar = new Schema({
    name: {
        type: String,
        required :true,
    },
    location: String,
    updated_at : Date
})

const fantasyCharModel = mongoose.model("Fanatasy-characters", fantasyChar);
export const createFantasyCharModel = async (data) => {
try {
    const getCharData = await fantasyCharModel.create(data);
        console.log("The fantasy character data will be available here : ", getCharData);
} catch (error) {
    console.log(error);
}
}
