import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import posed from 'react-pose';
import { mediaSize } from '../data/configOptions';
import TemplateWrapper from '../components/TemplateWrapper';
import ProjectShowcase from '../components/ProjectShowcase';
import { projectsList } from '../data/projectData';
import Triangle from '../components/Triangle';
import colors from '../../colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 3vmin;
  justify-items: center;

  ${mediaSize.tablet`
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  `} ${mediaSize.phone`
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
  `};
`;

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuFocused: false
    };
    this.theme = colors;
  }

  handleFocus = menuFocused => {
    this.setState({ menuFocused });
  };

  render() {
    return (
      <ThemeProvider theme={{ colors }}>
        <React.Fragment>
          <GlobalStyle />
          <Triangle
            color="backgroundDark"
            height={['35vh', '80vh']}
            width={['95vw', '40vw']}
            shouldFade={this.state.menuFocused}
          />
          <Triangle
            color="primaryDark"
            height={['38vh', '25vh']}
            width={['50vw', '80vw']}
            shouldFade={this.state.menuFocused}
            invertX
          />
          <TemplateWrapper
            header="past projects."
            menu
            footer
            curPage="Projects"
            outerBounds={{ top: '7%', left: '15%', right: '15%', bottom: '0' }}
            title="Projects"
            focusCallback={this.handleFocus}
          >
            <ProjectGrid
              style={this.props.transition && this.props.transition.style}
            >
              {projectsList.map((project, i) => (
                <ProjectShowcase key={i} id={i} project={project} />
              ))}
            </ProjectGrid>
          </TemplateWrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default ProjectsPage;
