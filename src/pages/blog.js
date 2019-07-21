import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import blogStyles from './styles/blog.module.scss';

const Blog = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log(posts);

  return (
    <div>
      <Layout>
        <h1>My Blog.</h1>
        <ol className={blogStyles.posts}>
          {posts.map(post => (
            <li key={post.node.excerpt} className={blogStyles.post}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  );
};

export default Blog;
