import React from 'react'
import Link from 'gatsby-link'
import styles from './recents.module.scss'

export default function Recents({ articles }) {
  return (
    <section>
      <h2> Recently published </h2>
      <ul className={ styles.recents }>
        {
          articles.map(({ node: post }) => (
            <li
              className={ styles.recentsCard }
              key={ post.frontmatter.title + post.frontmatter.date }
            >
              <Link to={ post.frontmatter.path }>
                <h3> { post.frontmatter.title } </h3>
                <p>
                  { post.excerpt }
                </p>
                <div className={ styles.stripe } />
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}