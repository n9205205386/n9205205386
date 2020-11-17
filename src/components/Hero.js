import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import SocialLinks from "../constants/socialLinks"

const Hero = () => {
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
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Gaurav</h1>
            <h4>ReactJS Developer</h4>
            <Link className="btn" to="/contact">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image
          style={{ borderRadius: "50%", width: "70%" }}
          fluid={data.file.childImageSharp.fluid}
          className="hero-img"
        />
      </div>
    </header>
  )
}

export default Hero
