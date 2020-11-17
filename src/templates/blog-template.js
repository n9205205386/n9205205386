import React from "react"
import { graphql, Link } from "gatsby"

import "./blog.css"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      date(formatString: "MMMM Do, YYYY")
      title
      excerpt
      content
      tags {
        nodes {
          name
        }
      }
    }
  }
`

const ComponentName = props => {
  const excerpt = props.data.wpPost.excerpt

  const start = excerpt.indexOf(">")
  const end = excerpt.indexOf("<", 1)
  const description = excerpt.slice(start + 1, end)

  return (
    <Layout>
      <SEO title={props.data.wpPost.title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <Title title={props.data.wpPost.title} />
            <p>Posted on: {props.data.wpPost.date}</p>
            <div className="project-stack">
              {props.data.wpPost.tags.nodes.map(item => {
                return <span key={item.name}>{item.name}</span>
              })}
            </div>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: props.data.wpPost.content }}
            />
          </article>
          <Link to="/blogs" className="btn center-btn">
            blogs
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ComponentName
