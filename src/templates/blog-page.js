import React, { Fragment } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import SEO from 'components/SEO'

export const BlogPageTemplate = ({
  description,
  title,
  content,
  blogPosts
}) => (
  <Fragment>
    <SEO {...{ title, description }} />
    <Helmet title={title} />
    <Container>
      <Heading>Blog</Heading>
      <Text>Check out some of our recent posts!</Text>
    </Container>
    <ul>
      {blogPosts.edges.map((post, i) => (
        <li key={i}>
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
)
const Container = styled.div`
  padding: 50px 0;
  width: 100%;
  background-color: rgb(247, 247, 247);
  border-top: 5px solid ${props => props.theme.accentColor1};
  box-shadow: ${props => props.theme.shadow};
`
const Heading = styled.h1`
  margin: 0 auto;
  font-size: 30pt;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
  color: ${props => props.theme.headingColor};
`
const Text = styled.h1`
  margin: 5px auto;
  font-size: 20pt;
  text-align: center;
  color: ${props => props.theme.headingColor};
`

export default ({ data }) => {
  const { markdownRemark: page, blogPosts } = data

  return (
    <BlogPageTemplate
      description={page.frontmatter.description}
      title={page.frontmatter.title}
      content={page.html}
      blogPosts={blogPosts}
    />
  )
}

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { regex: "/blog-post/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            description
            date
          }
        }
      }
    }
  }
`
