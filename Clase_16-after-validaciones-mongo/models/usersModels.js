import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: [10, "El nombre es muy largo"],
      // match: /Ale/,
      // enum: ["Ale", "David"],
    },
    age: {
      type: Number,
      min: 18,
      max: 45,
    },
    email: {
      type: String,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      lowercase: true,
      trim: true,
      validate: [
        {
          validator: (value) => {
            if (value.length < 10) return false;
            return true;
          },
          message: "El email es muy corto",
        },
      ],
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("Users", Schema);
