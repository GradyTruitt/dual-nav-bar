import React, { Fragment } from 'react'
import styled from 'styled-components'

import Logo from 'icons/main-logo-2.svg'

export default () => (
  <Fragment>
    <FooterLogo />
    <FooterText>
      Merchant Labs Ltd. &nbsp; | &nbsp; Bentonville, Arkansas
    </FooterText>
  </Fragment>
)

const FooterLogo = styled(Logo)`
  margin: 0 auto;
  position: fixed;
  left: calc(50% - 50px);
  bottom: 35px;
  fill: ${props => props.theme.fontColor};
  width: 100px;
  opacity: 0.5;
`
const FooterText = styled.p`
  width: 100%;
  position: fixed;
  bottom: 15px;
  font-size: 12px;
  color: ${props => props.theme.fontColor};
  text-align: center;
`
