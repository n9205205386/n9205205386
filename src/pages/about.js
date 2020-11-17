import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const About = () => {
  const stack = [
    { title: "ReactJS" },
    { title: "NodeJS" },
    { title: "React Native" },
    { title: "Redux" },
    { title: "Git" },
    { title: "WordPress" },
  ]
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" description="Web app developer in ghaziabad." />
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            // style={{ borderRadius: "50%" }}
            fluid={data.file.childImageSharp.fluid}
            className="about-img"
          />
          <article className="about-text">
            <Title title="About Me" />
            <p>
              I am passionate about modern web apps. I am available for
              freelance work and projects.
            </p>
            <p>
              I specialize in ReactJS, NodeJS, & Wordpress. I have experience in
              building User Interfaces with React, creating API endpoints in
              Express and connecting it with MongoDB database. Android / ios app
              development for small projects using React Native.
            </p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.title}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
