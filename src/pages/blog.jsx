import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BlogPost from '../components/BlogPost';
import TemplateWrapper from '../components/TemplateWrapper';
import Triangle from '../components/Triangle';
import colors from '../../colors';

const mediumCDNUrl = 'https://cdn-images-1.medium.com/max/750/';
const mediumAuthorUrl = 'https://medium.com/@brandonagray';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      menuFocused: false
    };
    this.theme = colors;
  }

  handleFocus = menuFocused => {
    this.setState({ menuFocused });
  };

  render() {
    const posts = this.props.data.allMediumPost.edges;
    return (
      <ThemeProvider theme={{ colors }}>
        <React.Fragment>
          <Triangle
            color="backgroundDark"
            height={['65vh', '70vh']}
            width={['25vw', '20vw']}
            shouldFade={this.state.menuFocused}
          />
          <Triangle
            color="secondary"
            height={['20vh', '45vh']}
            width={['95vw', '20vw']}
            shouldFade={this.state.menuFocused}
            invertX
          />
          <TemplateWrapper
            menu
            footer
            curPage="Blog"
            outerBounds={{ top: '7%', left: '15%', right: '15%', bottom: '0' }}
            title="Blog"
            header="my writings."
            focusCallback={this.handleFocus}
          >
            <div style={this.props.transition && this.props.transition.style}>
              {posts.map(post => (
                <BlogPost
                  key={post.node.id}
                  title={post.node.title}
                  author={post.node.author.name}
                  subtitle={post.node.content.subtitle}
                  createdAt={post.node.createdAt}
                  articleSrc={`${mediumAuthorUrl}/${post.node.uniqueSlug}`}
                  imgSrc={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
                  imgAlt={post.node.title}
                  color={`hsl(${Math.floor(Math.random() * 360)},100%, 87.5%)`}
                  imgSize={{ width: '100%', height: '100%' }}
                />
              ))}
            </div>
          </TemplateWrapper>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogQuery {
    allMediumPost(limit: 5, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          createdAt
          author {
            name
          }
          content {
            subtitle
          }
          virtuals {
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`;
