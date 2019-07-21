/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </Layout>
);

export default Blog;
