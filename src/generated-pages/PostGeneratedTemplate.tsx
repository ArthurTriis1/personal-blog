import { graphql } from 'gatsby'
import React from 'react'

import PostTemplate from '../templates/PostTemplate'

const PostGeneratedTemplate: React.FC = ({ data }: any) => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        thumb: {
          childImageSharp: { gatsbyImageData },
        },
      },
      html,
    },
  } = data
  return (
    <>
      <PostTemplate html={html} thumb={gatsbyImageData} title={title} />
    </>
  )
}

export default PostGeneratedTemplate

export const pageQuery = graphql`
  query getPostDetailsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      html
    }
  }
`
