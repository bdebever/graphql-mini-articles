const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function createArticle(parent, { title, categoryIds, paragraphes }, ctx, info) {
  return ctx.prisma.createArticle({
      title,
      categories: {
        connect: [
          ...categoryIds.map(id => {
            return {
              'id': id
            }
          })
        ]
      },
      paragraphes: {
        create: [
          ...paragraphes.map((val, index) => {
            return {
              'content': val,
              'order': index
            }
          })
        ]
      }
    });
}

async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.prisma.createUser({
    data: { ...args, password },
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function login(parent, args, ctx, info) {
  const user = await ctx.db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

/**
 * Because we assume an article won't contain hundred of paragrapheds, we allow the update of every paragraph
 *
 * @param {*} parent
 * @param {*} param1
 * @param {*} ctx
 * @param {*} info
 */
async function changeParagraphOrder(parent, { paragraphes }, ctx, info) {
  const items = await ctx.prisma.paragraphs({
    where: {
      id_in: paragraphes
    }
   });

  const result = await Promise.all(items.map(async (item, index) => {
    return await ctx.prisma.updateParagraph({
      data: {
        order: paragraphes.findIndex(k => k === item.id)
      },
      where: {
        id: item.id
      }
    });
  }));

  return result;
}

module.exports = {
  createArticle,
  signup,
  login,
  changeParagraphOrder
}
