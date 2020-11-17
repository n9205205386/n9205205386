import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({
  id,
  title,
  featuredImage,
  date,
  tags: { nodes },
  slug,
  excerpt,
}) => {
  return (
    <Link to={`/${slug}`} className="blog" key={id}>
      <article>
        {featuredImage && (
          <Image
            fluid={featuredImage.node.localFile.childImageSharp.fluid}
            className="blog-img"
          />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div className="blog-footer">
            <p>
              {nodes.slice(0, 1).map(tag => (
                <React.Fragment key={tag.name}>{tag.name} </React.Fragment>
              ))}
            </p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object),
  excerpt: PropTypes.string,
  slug: PropTypes.string.isRequired,
  featuredImage: PropTypes.object,
}

export default Blog
