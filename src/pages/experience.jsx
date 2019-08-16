import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import posed from 'react-pose';

import TemplateWrapper from '../components/TemplateWrapper';
import PageHeader from '../components/PageHeader';
import WorkShowcase from '../components/WorkShowcase';
import { experienceList } from '../data/experienceData';
import Triangle from '../components/Triangle';
import colors from '../../colors';

class ExperiencePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFocus = menuFocused => {
    this.setState({ menuFocused });
  };

  render() {
    return (
      <ThemeProvider theme={{ colors }}>
        <React.Fragment>
          <Triangle
            color="backgroundDark"
            height={['38vh', '25vh']}
            width={['50vw', '60vw']}
            shouldFade={this.state.menuFocused}
            invertX
          />
          <Triangle
            color="secondary"
            height={['25vh', '75vh']}
            width={['95vw', '25vw']}
            shouldFade={this.state.menuFocused}
          />
          <TemplateWrapper
            header="work experience."
            menu
            footer
            curPage="Work Experience"
            outerBounds={{ top: '7%', left: '15%', right: '15%', bottom: '0' }}
            title="Work Experience"
            focusCallback={this.handleFocus}
          >
            <div style={this.props.transition && this.props.transition.style}>
              {experienceList.map((work, i) => {
                return <WorkShowcase key={i} work={work} />;
              })}
            </div>
          </TemplateWrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default ExperiencePage;
