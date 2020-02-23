exports.createPages = async ({
    actions, graphql
}) => {
    const { createPage } = actions
    const {
        data: {
            products:
            { edges:
                products } } } =
        await graphql(`
        {
        products: allContentfulProductItem {
            edges {
              node {
                id
                productTitle
                productCategory
                image {
                  fluid {
                      src
                  }
                }
              }
            }
          }
    }
`)
    products.forEach(({ node }) => {
        const productTitle = node.productTitle
        const productCategory = node.productCateogy
        createPage({
            path: productTitle, component: require.resolve('./src/templates/product-template.js'), context: {
                productTitle: productTitle,
                productCategory: productCategory
            }
        })
    })
}