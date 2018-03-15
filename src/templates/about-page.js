import React, { Fragment } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import SEO from 'components/SEO'

export const AboutPageTemplate = ({ title, content, description }) => {
  return (
    <Fragment>
      <SEO {...{ title, description }} />
      <Helmet title={title} />
      <Container>
        <Heading>Hello World!</Heading>
        <Text>Default Starter Page 1</Text>
      </Container>
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

export default ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <AboutPageTemplate
      description={page.frontmatter.description}
      title={page.frontmatter.title}
      content={page.html}
    />
  )
}

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
