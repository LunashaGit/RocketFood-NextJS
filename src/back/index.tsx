import dotenv from "dotenv";
import mongoose from "mongoose";
import { server } from "./graphql/server";
dotenv.config({ path: ".env" });

mongoose
  .set("strictQuery", false)
  .connect(
    `mongodb+srv://${process.env.name}:${process.env.password}@${process.env.database}`
  )
  .then(() => {
    server.listen({ port: process.env.PORT }).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });
