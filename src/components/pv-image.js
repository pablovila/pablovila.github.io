import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "pv-red.png" }) {
          childImageSharp {
            fixed(width: 84) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default Image