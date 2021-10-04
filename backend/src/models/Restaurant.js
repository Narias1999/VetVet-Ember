import { Schema, model } from "mongoose";
import { cities, cuisines } from "../data";


const restaurant = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    cusine: {
      type: String,
      enum: cuisines,
      required: true,
    },
    city: {
      type: String,
      enum: cities,
      required: true
    },
    image: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Restaurant", restaurant);
