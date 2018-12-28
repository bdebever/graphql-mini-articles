async function feed(parent, args, context, info) {
  const { filter, skip, orderBy } = args // destructure input arguments
  const where = filter
    ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
    : {}

  const allArticles = await context.prisma.articles({
    orderBy: orderBy ? orderBy : 'createdAt_DESC'
  });

  return allArticles;
}

async function categories(parent, args, context, info) {
  const allCategories = await context.prisma.categories({})
  return allCategories;
}

async function article(parent, { id, orderBy }, context, info) {
  const article = await context.prisma.article({ id })
  return article;
}

module.exports = {
  feed,
  categories,
  article
}
