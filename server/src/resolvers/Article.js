function paragraphes({ id }, args, context) {
    return context.prisma.article({ id }).paragraphes()
}

function categories({ id }, args, context) {
    return context.prisma.article({ id }).categories()
}

module.exports = {
    paragraphes,
    categories
}