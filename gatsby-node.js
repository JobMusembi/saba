const path = require(`path`)

exports.createPages = ({ actions: { createPage } }) => {
    const products = require("./src/components/data/products.json")
    products.forEach(product => {
      createPage({
        path: `/furniture/${product.id}`,
        component: path.resolve(`${product.filePath}`),
        context: product,
      })
    })
  }