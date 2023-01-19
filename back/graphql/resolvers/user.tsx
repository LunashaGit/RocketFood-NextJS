import Users from "./../../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

type User = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  isAdmin: boolean;
  password: string;
};

export const QueryUser = {
  Query: {
    async getUsers() {
      return await Users.find();
    },
  },
  Mutation: {
    async login(_: string, { email, password }: User) {
      const user = await Users.findOne({ email });

      if (!user) {
        throw new UserInputError("User not found");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new UserInputError("Wrong password");
      }

      const jwt_token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
      );

      jwt_token && (user.token = jwt_token);
      await user.save();

      return {
        id: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        isAdmin: user.isAdmin,
        token: user.token,
      };
    },

    async register(
      _: string,
      { registerInput: { email, firstname, lastname, password } }: any,
      context: string,
      info: string
    ) {
      const user = await Users.findOne({ email });
      if (user) {
        throw new UserInputError("Email is taken", {
          errors: {
            email: "This email is taken",
          },
        });
      }

      password = await bcrypt.hash(password, 8);
      const NewUser = new Users({
        email,
        firstname,
        lastname,
        password,
      });

      const res = await NewUser.save();

      const token = jwt.sign(
        { id: res._id, email: res.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
      );

      return {
        id: res._id,
        token,
        ...res._doc,
      };
    },
  },
};
