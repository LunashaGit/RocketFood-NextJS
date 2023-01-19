import mongoose, { Schema, Document, Model } from "mongoose";
import isEmail from "validator/lib/isEmail";

interface IUser extends Document {
  _doc: any;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  token: string;
}

interface IUserDocument extends IUser {}

interface IUserModel extends Model<IUserDocument> {
  findByCredentials: (
    email: string,
    password: string
  ) => Promise<IUserDocument>;
}

const UserSchema: Schema<IUserDocument> = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    validate: [isEmail],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    trim: true,
  },
  token: {
    type: String,
    trim: true,
    default: "",
  },
});

const UserModel = mongoose.model<IUserDocument, IUserModel>("user", UserSchema);

export default UserModel;
