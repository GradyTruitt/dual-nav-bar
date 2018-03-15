import React, { Fragment } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import SEO from 'components/SEO'
import Content, { HTMLContent } from 'components/Content'

export const BlogPostTemplate = ({
  title,
  content,
  description,
  contentComponent
}) => {
  const PostContent = contentComponent || Content

  return (
    <Fragment>
      <SEO {...{ title, description }} />
      <Helmet title={title} />
      <Container>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Container>
      <PostContent content={content} />
    </Fragment>
  )
}

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

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      title={post.frontmatter.title}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
