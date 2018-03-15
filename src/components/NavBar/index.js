import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Logo from 'icons/tugg-logo.svg'
// import GitHub from 'icons/github-icon.svg'

import Hamburger from 'components/NavBar/HamburgerIcon'
//Nav Routes
// import Routes from './Routes'

export default class NavBar extends Component {

  state = {
    open: false,
    menu: 'slideOut'
  }

  _onScroll = () => {
    if (typeof window !== 'undefined') {
      window.pageYOffset > (window.innerHeight - 200)
        ? this.setState({ menu: 'fixedTop' })
        : this.setState({ menu: 'slideOut' })
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.onScroll = window.addEventListener('scroll', this._onScroll)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this._onScroll)
    }
  }

  handleClick = () => {
    const { open } = this.state
    open ? this.setState({ open: false }) : this.setState({ open: true })
  }

  render() {
    const { open, menu } = this.state

    return (
      <Container menu={menu}>
        {menu === 'slideOut'
          ?
          (<Hamburger
            open={open.toString()}
            click={this.handleClick}
          />)
          :
          null
        }
        <LogoContainer menu={menu}>
          <Link to="/">
          <MainLogo menu={menu}/>
        </Link>
      </LogoContainer>
      <Button to="/">GET A QUOTE</Button>
    </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 85px;
  padding: 20px 40px;
  position: fixed;
  background-color: ${props => props.menu === 'slideOut' ? 'rgba(0, 0, 0, 0.4)' : 'white'};
  box-shadow: ${props => props.menu === 'slideOut' ? 'none' : '0 3px 10px rgba(0, 0, 0, 0.15)'};
  transition-duration: 0.5s;
`
const LogoContainer = styled.div`
  position: fixed;
  top: 22px;
  left: ${props => props.menu === 'slideOut' ? 'calc( 50% - 50px)' : '20px'};
  width: 103px;
  height: 45px;
  transition-duration: 0.3s;
`
const MainLogo = styled(Logo)`
  width: 103px;
  height: 45px;
  transition-duration: 0.5s;

  path {
    fill: ${props => props.menu === 'slideOut' ? 'white' : props.theme.primaryColor};
  }

  &:hover {
    transition-duration: 0.3s;
    & path {
      fill: ${props => props.theme.primaryColor};
    }
  }
`
// const ExternalLink = NavLink.withComponent('a').extend`
//   & svg {
//     height: 24px;
//     width: 24px;
//
//     path {
//       transition-duration: 0.5s;
//       fill: white;
//     }
//   }
//
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.25);
//
//     & path {
//       fill: ${props => props.theme.accentColor1};
//     }
//   }
// `
const Button = styled(Link)`
  position: fixed;
  right: 30px;
  top: 20px;
  padding: 22px 35px;
  color: white;
  border-radius: 22px;
  line-height: 0pt;
  font-size: 14pt;
  font-weight: 600;
  font-family: ${props => props.theme.fontFamily};
  letter-spacing: -1px;
  box-shadow: 0 6 10 rgba(0, 0, 0, .9);
  text-align: center;
  background-color: ${props => props.theme.primaryColor};
`
