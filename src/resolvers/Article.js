function paragraphes({ id, orderBy }, args, context) {
    return context.prisma.article({ id }).paragraphes(
        {
            orderBy: orderBy ? orderBy : 'order_ASC'
        }
    )
}

function categories({ id }, args, context) {
    return context.prisma.article({ id }).categories()
}

module.exports = {
    paragraphes,
    categories
}