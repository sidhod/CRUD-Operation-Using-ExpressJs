import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String

    },
    lastName: {
      type: String

    },
    age: {
      type: Number

    },
    email: {
      type: String,

    },
    password: {
      type: String,
      required: true

    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
