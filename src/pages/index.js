import React, { Fragment } from 'react'
import styled from 'styled-components'

import ImageLoader from 'components/ImageLoader'

export default ({ data }) => (
  <Fragment>
    <ImageLoader srcSet={data.img.sizes.srcSet}>
      {src =>
        <Background url={src}>

        </Background>}
    </ImageLoader>
  </Fragment>
)

const Background = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  width: 100vw;
  height: 100vh;
  margin-bottom: 1000px;
`

export const query = graphql`
  query HomePageQuery {
    img: imageSharp(id: { regex: "/home-header/" }) {
      id
      sizes {
        srcSet
        sizes
        src
      }
    }
  }
`
