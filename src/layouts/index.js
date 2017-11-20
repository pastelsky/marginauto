import React from 'react'
import Helmet from 'react-helmet'

import Me from '../components/me'
import Recents from '../components/recents'

import styles from './index.module.scss'
import '../stylesheets/index.scss'

export default ({ children, data}) =>
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Noticia+Text|Nunito|Fira+Code"
            rel="stylesheet" />
    </Helmet>
    <div className={ styles.main }>
      <div className={ styles.article }>
      { children() }
      </div>
      <aside className={ styles.sidebar }>
        <Me />
        <Recents articles={ data.allMarkdownRemark.edges } />
      </aside>
    </div>

  </div>


export const pageQuery = graphql `
  query RecentsQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
        }
        excerpt
      }
    }
  }
}
`