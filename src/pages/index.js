import React from 'react';
import Link from 'gatsby-link';
import { parse, format } from 'date-fns'
import styles from './index.module.scss'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <ul className={ styles.postsContainer }>
      { posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <li className={ styles.post } key={ post.id }>
              <h2 className={ styles.postTitle }>
                <Link to={ post.frontmatter.path }>
                  { post.frontmatter.title }
                </Link>
              </h2>
              <h4 className={ styles.postDate }>
                { format(parse(post.frontmatter.date), 'Do MMM YYYY') }
              </h4>
              <p>{ post.excerpt }</p>
              <Link to={ post.frontmatter.path }
                    className={ styles.readMoreLink }>
                Continue reading &hellip;
              </Link>
            </li>
          );
        }) }
    </ul>
  );
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 350)
                    frontmatter {
                        title
                        date
                        path
                    }
                }
            }
        }
    }
`;