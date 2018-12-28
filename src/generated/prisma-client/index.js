"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Article",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Paragraph",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/baptiste-debever-bf48d1/paragraphes-iteem-1/dev`,
  secret: `mysecret123`
});
exports.prisma = new exports.Prisma();
