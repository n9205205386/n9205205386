import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({
  content,
  title,
  tags: { nodes },
  excerpt,
  featuredImage,
  index,
}) => {
  const start = excerpt.indexOf(">")
  const end = excerpt.indexOf("<", 1)
  const url = excerpt.slice(start + 1, end)

  return (
    <article className="project">
      {featuredImage && (
        <Image
          fluid={featuredImage.node.localFile.childImageSharp.fluid}
          className="project-img"
        />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3
          style={{ color: "#2caeba" }}
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="easeInSine"
        >
          {title}
        </h3>
        <div
          data-sal="slide-left"
          data-sal-delay="800"
          data-sal-easing="easeOutCubic"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="project-stack">
          {nodes &&
            nodes.map(item => {
              return <span key={item.name}>{item.name}</span>
            })}
        </div>
        <div className="project-links">
          <a href={url}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  featuredImage: PropTypes.object.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object),
}

export default Project
