import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query getPosts($catname: String = "posts") {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: $catname } } } }
        }
        sort: { fields: date, order: DESC }
      ) {
        edges {
          node {
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            id
            slug
            title
            date(formatString: "MMM Do, YYYY")
            content
            tags {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" description="Blogs on ReactJS and web developement." />
      <section className="blog-page">
        <Blogs blogs={data.allWpPost.edges} title="blog" />
      </section>
    </Layout>
  )
}

export default Blog
