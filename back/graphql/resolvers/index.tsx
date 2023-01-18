import { QueryUser } from "./user";

const resolvers = {
  Query: {
    port: () => `I'm on port ${process.env.PORT}`,
    ...QueryUser.Query,
  },
  Mutation: {
    ...QueryUser.Mutation,
  },
};

export { resolvers };
