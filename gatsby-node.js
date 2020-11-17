const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query($catname: String = "posts") {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: $catname } } } }
        }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allWpPost.edges.forEach(blog => {
    createPage({
      path: `/${blog.node.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.node.slug,
      },
    })
  })
}
