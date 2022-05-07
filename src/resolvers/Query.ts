import { QueryResolvers } from "../generated/schema";

export const Query: QueryResolvers = {
  hello() {
    return "Hello World";
  },
};
