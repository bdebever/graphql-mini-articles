module.exports = {
        typeDefs: /* GraphQL */ `type AggregateArticle {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateParagraph {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Article {
  id: ID!
  title: String!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  createdAt: DateTime!
  updatedAt: DateTime!
  paragraphes(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph!]
}

type ArticleConnection {
  pageInfo: PageInfo!
  edges: [ArticleEdge]!
  aggregate: AggregateArticle!
}

input ArticleCreateInput {
  title: String!
  categories: CategoryCreateManyInput
  paragraphes: ParagraphCreateManyWithoutArticleInput
}

input ArticleCreateOneWithoutParagraphesInput {
  create: ArticleCreateWithoutParagraphesInput
  connect: ArticleWhereUniqueInput
}

input ArticleCreateWithoutParagraphesInput {
  title: String!
  categories: CategoryCreateManyInput
}

type ArticleEdge {
  node: Article!
  cursor: String!
}

enum ArticleOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArticlePreviousValues {
  id: ID!
  title: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ArticleSubscriptionPayload {
  mutation: MutationType!
  node: Article
  updatedFields: [String!]
  previousValues: ArticlePreviousValues
}

input ArticleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArticleWhereInput
  AND: [ArticleSubscriptionWhereInput!]
  OR: [ArticleSubscriptionWhereInput!]
  NOT: [ArticleSubscriptionWhereInput!]
}

input ArticleUpdateInput {
  title: String
  categories: CategoryUpdateManyInput
  paragraphes: ParagraphUpdateManyWithoutArticleInput
}

input ArticleUpdateManyMutationInput {
  title: String
}

input ArticleUpdateOneRequiredWithoutParagraphesInput {
  create: ArticleCreateWithoutParagraphesInput
  update: ArticleUpdateWithoutParagraphesDataInput
  upsert: ArticleUpsertWithoutParagraphesInput
  connect: ArticleWhereUniqueInput
}

input ArticleUpdateWithoutParagraphesDataInput {
  title: String
  categories: CategoryUpdateManyInput
}

input ArticleUpsertWithoutParagraphesInput {
  update: ArticleUpdateWithoutParagraphesDataInput!
  create: ArticleCreateWithoutParagraphesInput!
}

input ArticleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  paragraphes_every: ParagraphWhereInput
  paragraphes_some: ParagraphWhereInput
  paragraphes_none: ParagraphWhereInput
  AND: [ArticleWhereInput!]
  OR: [ArticleWhereInput!]
  NOT: [ArticleWhereInput!]
}

input ArticleWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  slug: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  slug: String!
  name: String!
}

input CategoryCreateManyInput {
  create: [CategoryCreateInput!]
  connect: [CategoryWhereUniqueInput!]
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  slug: String!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CategoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CategoryScalarWhereInput!]
  OR: [CategoryScalarWhereInput!]
  NOT: [CategoryScalarWhereInput!]
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateDataInput {
  slug: String
  name: String
}

input CategoryUpdateInput {
  slug: String
  name: String
}

input CategoryUpdateManyDataInput {
  slug: String
  name: String
}

input CategoryUpdateManyInput {
  create: [CategoryCreateInput!]
  update: [CategoryUpdateWithWhereUniqueNestedInput!]
  upsert: [CategoryUpsertWithWhereUniqueNestedInput!]
  delete: [CategoryWhereUniqueInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  deleteMany: [CategoryScalarWhereInput!]
  updateMany: [CategoryUpdateManyWithWhereNestedInput!]
}

input CategoryUpdateManyMutationInput {
  slug: String
  name: String
}

input CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput!
  data: CategoryUpdateManyDataInput!
}

input CategoryUpdateWithWhereUniqueNestedInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateDataInput!
}

input CategoryUpsertWithWhereUniqueNestedInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
  slug: String
}

scalar DateTime

scalar Long

type Mutation {
  createArticle(data: ArticleCreateInput!): Article!
  updateArticle(data: ArticleUpdateInput!, where: ArticleWhereUniqueInput!): Article
  updateManyArticles(data: ArticleUpdateManyMutationInput!, where: ArticleWhereInput): BatchPayload!
  upsertArticle(where: ArticleWhereUniqueInput!, create: ArticleCreateInput!, update: ArticleUpdateInput!): Article!
  deleteArticle(where: ArticleWhereUniqueInput!): Article
  deleteManyArticles(where: ArticleWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createParagraph(data: ParagraphCreateInput!): Paragraph!
  updateParagraph(data: ParagraphUpdateInput!, where: ParagraphWhereUniqueInput!): Paragraph
  updateManyParagraphs(data: ParagraphUpdateManyMutationInput!, where: ParagraphWhereInput): BatchPayload!
  upsertParagraph(where: ParagraphWhereUniqueInput!, create: ParagraphCreateInput!, update: ParagraphUpdateInput!): Paragraph!
  deleteParagraph(where: ParagraphWhereUniqueInput!): Paragraph
  deleteManyParagraphs(where: ParagraphWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Paragraph {
  id: ID!
  content: String!
  order: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
  article: Article!
}

type ParagraphConnection {
  pageInfo: PageInfo!
  edges: [ParagraphEdge]!
  aggregate: AggregateParagraph!
}

input ParagraphCreateInput {
  content: String!
  order: Int!
  article: ArticleCreateOneWithoutParagraphesInput!
}

input ParagraphCreateManyInput {
  create: [ParagraphCreateInput!]
  connect: [ParagraphWhereUniqueInput!]
}

input ParagraphCreateManyWithoutArticleInput {
  create: [ParagraphCreateWithoutArticleInput!]
  connect: [ParagraphWhereUniqueInput!]
}

input ParagraphCreateWithoutArticleInput {
  content: String!
  order: Int!
}

type ParagraphEdge {
  node: Paragraph!
  cursor: String!
}

enum ParagraphOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  order_ASC
  order_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParagraphPreviousValues {
  id: ID!
  content: String!
  order: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ParagraphScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  order: Int
  order_not: Int
  order_in: [Int!]
  order_not_in: [Int!]
  order_lt: Int
  order_lte: Int
  order_gt: Int
  order_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ParagraphScalarWhereInput!]
  OR: [ParagraphScalarWhereInput!]
  NOT: [ParagraphScalarWhereInput!]
}

type ParagraphSubscriptionPayload {
  mutation: MutationType!
  node: Paragraph
  updatedFields: [String!]
  previousValues: ParagraphPreviousValues
}

input ParagraphSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParagraphWhereInput
  AND: [ParagraphSubscriptionWhereInput!]
  OR: [ParagraphSubscriptionWhereInput!]
  NOT: [ParagraphSubscriptionWhereInput!]
}

input ParagraphUpdateDataInput {
  content: String
  order: Int
  article: ArticleUpdateOneRequiredWithoutParagraphesInput
}

input ParagraphUpdateInput {
  content: String
  order: Int
  article: ArticleUpdateOneRequiredWithoutParagraphesInput
}

input ParagraphUpdateManyDataInput {
  content: String
  order: Int
}

input ParagraphUpdateManyInput {
  create: [ParagraphCreateInput!]
  update: [ParagraphUpdateWithWhereUniqueNestedInput!]
  upsert: [ParagraphUpsertWithWhereUniqueNestedInput!]
  delete: [ParagraphWhereUniqueInput!]
  connect: [ParagraphWhereUniqueInput!]
  disconnect: [ParagraphWhereUniqueInput!]
  deleteMany: [ParagraphScalarWhereInput!]
  updateMany: [ParagraphUpdateManyWithWhereNestedInput!]
}

input ParagraphUpdateManyMutationInput {
  content: String
  order: Int
}

input ParagraphUpdateManyWithoutArticleInput {
  create: [ParagraphCreateWithoutArticleInput!]
  delete: [ParagraphWhereUniqueInput!]
  connect: [ParagraphWhereUniqueInput!]
  disconnect: [ParagraphWhereUniqueInput!]
  update: [ParagraphUpdateWithWhereUniqueWithoutArticleInput!]
  upsert: [ParagraphUpsertWithWhereUniqueWithoutArticleInput!]
  deleteMany: [ParagraphScalarWhereInput!]
  updateMany: [ParagraphUpdateManyWithWhereNestedInput!]
}

input ParagraphUpdateManyWithWhereNestedInput {
  where: ParagraphScalarWhereInput!
  data: ParagraphUpdateManyDataInput!
}

input ParagraphUpdateWithoutArticleDataInput {
  content: String
  order: Int
}

input ParagraphUpdateWithWhereUniqueNestedInput {
  where: ParagraphWhereUniqueInput!
  data: ParagraphUpdateDataInput!
}

input ParagraphUpdateWithWhereUniqueWithoutArticleInput {
  where: ParagraphWhereUniqueInput!
  data: ParagraphUpdateWithoutArticleDataInput!
}

input ParagraphUpsertWithWhereUniqueNestedInput {
  where: ParagraphWhereUniqueInput!
  update: ParagraphUpdateDataInput!
  create: ParagraphCreateInput!
}

input ParagraphUpsertWithWhereUniqueWithoutArticleInput {
  where: ParagraphWhereUniqueInput!
  update: ParagraphUpdateWithoutArticleDataInput!
  create: ParagraphCreateWithoutArticleInput!
}

input ParagraphWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  order: Int
  order_not: Int
  order_in: [Int!]
  order_not_in: [Int!]
  order_lt: Int
  order_lte: Int
  order_gt: Int
  order_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  article: ArticleWhereInput
  AND: [ParagraphWhereInput!]
  OR: [ParagraphWhereInput!]
  NOT: [ParagraphWhereInput!]
}

input ParagraphWhereUniqueInput {
  id: ID
}

type Query {
  article(where: ArticleWhereUniqueInput!): Article
  articles(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Article]!
  articlesConnection(where: ArticleWhereInput, orderBy: ArticleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArticleConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  paragraph(where: ParagraphWhereUniqueInput!): Paragraph
  paragraphs(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph]!
  paragraphsConnection(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParagraphConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  article(where: ArticleSubscriptionWhereInput): ArticleSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  paragraph(where: ParagraphSubscriptionWhereInput): ParagraphSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  paragraphes(where: ParagraphWhereInput, orderBy: ParagraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Paragraph!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  paragraphes: ParagraphCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  paragraphes: ParagraphUpdateManyInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  paragraphes_every: ParagraphWhereInput
  paragraphes_some: ParagraphWhereInput
  paragraphes_none: ParagraphWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    