import React from 'react';
import Helmet from 'react-helmet';
import { parse, format } from 'date-fns'
import styles from './post.module.scss'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <article className={ styles.article }>
      <div className={ styles.headingWrap }>
        <h1>
          <div className={ styles.headingContent }>
            { post.frontmatter.title }
          </div>
        </h1>
      </div>
      <h5 className={ styles.date }>
         { format(parse(post.frontmatter.date), 'Do, MMMM YYYY') }
      </h5>
      <div dangerouslySetInnerHTML={ { __html: post.html } } />
    </article>
  )
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`