function article({ id }, args, context) {
    return context.prisma.paragraph({ id }).article()
}

module.exports = {
    article
}