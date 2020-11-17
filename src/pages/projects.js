import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Projects from "../components/Projects"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query getPostsByCategory1($catname: String = "projects") {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: $catname } } } }
        }
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
            date
            content
            tags {
              nodes {
                name
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {/* <SEO title="Projects" /> */}
      <section className="projects-page">
        <Projects projects={data.allWpPost.edges} title="all projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
