import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
// import Expertise from "../components/Expertise"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default () => {
  const data = useStaticQuery(graphql`
    query getFeaturedProjectsAndGetFeaturedPosts {
      projects: allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "featured-projects" } } }
          }
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
            title
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
      posts: allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "featured-posts" } } }
          }
        }
        limit: 3
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
            excerpt
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
      <SEO
        title="Home"
        description="Responsible freelancer for your Website Designing, Application development, SEO at affordable rates, and quick deployment."
      />
      <Hero />
      <Services />
      {/* <Expertise /> */}
      <Projects
        projects={data.projects.edges}
        title="featured projects"
        showLink
      />
      <Blogs blogs={data.posts.edges} title="latest articles" showLink />
    </Layout>
  )
}
