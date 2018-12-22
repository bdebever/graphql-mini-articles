async function feed(parent, args, context, info) {
  const { filter, skip, orderBy } = args // destructure input arguments
  const where = filter
    ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
    : {}

  const allArticles = await context.prisma.articles({})
  const count = allArticles.length

  //const queriedLinkes = await ctx.prisma.links({ first, skip, where })

  return allArticles;
}

async function categories(parent, args, context, info) {
  const allCategories = await context.prisma.categories({})
  return allCategories;
}

module.exports = {
  feed,
  categories
}
