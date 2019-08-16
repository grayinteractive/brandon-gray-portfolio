/*
  INDEX.JS
    The main page of the website.
    It exists at the root of the site and serves
    as the landing page for users.
*/

import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import posed from 'react-pose';
import Text from 'rebass';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Particles from 'react-particles-js';
import TextLoop from 'react-text-loop';
import { isMobile, isIOS } from 'react-device-detect';
import {
  mediaSize,
  greetingOptions,
  roleOptions,
  particleConfig
} from '../data/configOptions';
import TemplateWrapper from '../components/TemplateWrapper';
import SVGDrawIcon from '../components/SVGDrawIcon';
import ScrambleText from '../components/ScrambleText';
import Icon from '../components/Icon';
import Triangle from '../components/Triangle';

import colors from '../../colors';

injectGlobal`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;

// Style of the particles.js background container
const ParticlesStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '-2'
};

// React-pose configuration that provides a fade on enter transition
const fadeEnterConfig = {
  enter: {
    opacity: 0
  },
  normal: {
    opacity: 1,
    transition: { duration: 2500 }
  }
};

const Greeting = styled(posed.div(fadeEnterConfig))`
  font-size: 5vh;
  margin-top: 16%;

  ${mediaSize.phone`
    margin-top: 12%;
  `};
`;

const MainInfoText = styled(posed.div(fadeEnterConfig))`
  letter-spacing: 0;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 12vh;
  text-shadow: 0 0 0;

  ${mediaSize.tablet`
    letter-spacing: ${isIOS ? '-0.05em' : 0};
    font-weight: bold;
    line-height: 1em;
    margin-top: 1vh;
  `};
  ${mediaSize.phone`
    letter-spacing: ${isIOS ? '-0.05em' : 0};
    font-weight: bold;
    margin-top: 1vh;
    font-size: 10vh;
    line-height: 0.5em;
  `};
`;

const BriefBioText = styled(posed.div(fadeEnterConfig))`
  font-size: 4vh;
  font-weight: 300;
  color: #656565;
  margin-top: 0em;

  ${mediaSize.phone`
    margin-top: 0;
  `};
`;

const ImportantInfo = styled(posed.div(fadeEnterConfig))`
  position: absolute;
  bottom: 10%;
  left: 0;

  ${mediaSize.tablet`
    position: relative;
    bottom: 0;
    margin-top: 2vh;
  `} ${mediaSize.phone`
    position: relative;
    bottom: 0;
    margin-top: 2vh;
  `}

  & a {
    color: inherit;
    margin-bottom: 2vh;
    margin-left: 1vh;
    margin-right: 1vh;
  }

  & a:first-child {
    margin-left: 0;
  }
`;

const MainPagePic = styled(posed.div(fadeEnterConfig))`
  position: absolute;
  bottom: 0;
  right: -15%;
  width: 70%;
  z-index: -1;

  ${mediaSize.phone`
    width: 105%;
  `};
`;

const Logo = posed.img({
  enter: {
    x: -200,
    opacity: 0,
    width: 120
  },
  normal: {
    x: -25,
    opacity: 1,
    width: 120,
    transition: { duration: 500 }
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconAnimate: false,
      greeting:
        greetingOptions[Math.floor(Math.random() * greetingOptions.length)],
      // Load a new random greeting on every page load
      roles: roleOptions,
      menuFocused: false
    };
    this.theme = colors;
  }

  componentDidMount() {
    if (isMobile) {
      // Automatically animates the SVG icons after a set time
      // on devices with no hover capability (mobile devices)
      this.iconAnimateID = setTimeout(() => {
        this.setState({ iconAnimate: true });
      }, 3000);
    }
  }

  componentWillUnmount() {
    if (this.iconAnimateID) {
      clearTimeout(this.iconAnimateID);
    }
  }

  handleFocus = menuFocused => {
    this.setState({ menuFocused });
  };

  render() {
    return (
      <ThemeProvider theme={{ colors }}>
        <div
          id="particleBgContainer"
          style={this.props.transition && this.props.transition.style}
        >
          <Triangle
            color="backgroundDark"
            height={['35vh', '60vh']}
            width={['95vw', '70vw']}
            shouldFade={this.state.menuFocused}
            invertX
          />
          <Triangle
            color="secondary"
            height={['38vh', '30vh']}
            width={['50vw', '80vw']}
            shouldFade={this.state.menuFocused}
          />
          <Triangle
            color="primaryDark"
            height={['25vh', '75vh']}
            width={['75vw', '30vw']}
            shouldFade={this.state.menuFocused}
            invertX
          />
          <Triangle
            color="backgroundDark"
            height={['20vh', '30vh']}
            width={['100vw', '90vw']}
            shouldFade={this.state.menuFocused}
            invertY
          />
          <Particles params={particleConfig} style={ParticlesStyle} />
          <TemplateWrapper
            menu={{ default: true, prompt: true }}
            curPage="Home"
            outerBounds={{ top: '7%', left: '15%', right: '15%', bottom: '0' }}
            title="Brandon Gray"
            focusCallback={this.handleFocus}
          >
            <Logo
              src="/img/misc/logo.png"
              initialPose={'enter'}
              pose={'normal'}
            />
            {/* NOTE: script font in logo is BarleyScript */}
            <Greeting initialPose="enter" pose="normal">
              {`${this.state.greeting} I'm`}
            </Greeting>
            <MainInfoText initialPose="enter" pose="normal">
              <ScrambleText
                text="Brandon Gray."
                scramble="!<>-_\\/[]{}~—=+*^?#_abiwxevpi"
                options={{ duration: 250, speed: 15 }}
              />
            </MainInfoText>
            <BriefBioText initialPose="enter" pose="normal">
              <TextLoop interval={5000} children={this.state.roles}></TextLoop>
            </BriefBioText>
            <ImportantInfo initialPose="enter" pose="normal">
              <a
                href="mailto:me@brandongray.dev"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SVGDrawIcon
                  animate={this.state.iconAnimate}
                  ignoreHover={isMobile}
                >
                  <Icon name="paperPlane" size="3.5vh" color="#80D07F" />
                </SVGDrawIcon>
              </a>
              <a
                href="https://github.com/brandonagray"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SVGDrawIcon
                  animate={this.state.iconAnimate}
                  ignoreHover={isMobile}
                >
                  <Icon name="github" size="3.5vh" color="#5534AC" />
                </SVGDrawIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/brandonagray/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SVGDrawIcon
                  animate={this.state.iconAnimate}
                  ignoreHover={isMobile}
                >
                  <Icon name="linkedin" size="3.5vh" color="#2381D9" />
                </SVGDrawIcon>
              </a>
              <a
                href="https://www.instagram.com/thegraydisplay/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SVGDrawIcon
                  animate={this.state.iconAnimate}
                  ignoreHover={isMobile}
                >
                  <Icon name="aperture" size="3.5vh" color="#E4405F" />
                </SVGDrawIcon>
              </a>
            </ImportantInfo>
            <MainPagePic initialPose="enter" pose="normal">
              <Img sizes={this.props.data.mainImage.sizes} />
            </MainPagePic>
          </TemplateWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default HomePage;

// Loads main image on page
export const pageQuery = graphql`
  query HomeQuery {
    mainImage: imageSharp(id: { regex: "/index_main.png/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
