import React from 'react'
import styles from './me.module.scss'

import MyFaceSrc from '../../assets/imgs/me.jpg'

const GithubIcon = () => (
  <div className={ styles.icon }>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#000"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  </div>
)

const TwitterIcon = () => (
  <div className={ styles.icon }>
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 300 244.19"
         height="244.19"
         width="300">
      <path d="M94.72 243.18c112.46 0 173.96-93.17 173.96-173.96 0-2.65-.05-5.28-.17-7.9 11.97-8.63 22.34-19.4 30.5-31.66-10.93 4.87-22.72 8.14-35.1 9.62 12.64-7.57 22.3-19.54 26.9-33.8-11.8 7-24.9 12.08-38.82 14.83C240.8 8.45 224.92 1 207.33 1c-33.77 0-61.15 27.37-61.15 61.12 0 4.8.54 9.47 1.6 13.94-50.83-2.55-95.9-26.88-126.04-63.88-5.25 9.04-8.28 19.53-8.28 30.73 0 21.24 10.8 39.97 27.2 50.9-10.02-.3-19.45-3.04-27.68-7.62v.78c0 29.6 21.06 54.33 49.04 59.93-5.14 1.4-10.54 2.15-16.12 2.15-3.94 0-7.77-.4-11.5-1.1 7.8 24.3 30.36 41.96 57.12 42.46-20.92 16.4-47.28 26.17-75.93 26.17-4.96 0-9.8-.28-14.6-.85 27.04 17.37 59.2 27.5 93.7 27.5"
            fill="#1da1f2" />
    </svg>
  </div>
)
export default function Me() {
  return (
    <div className={ styles.meContainer }>
      <img className={ styles.myFace } src={ MyFaceSrc } alt="" />
      <p>
        Hello, I'm Shubham Kanodia, a front-end developer
      </p>
      <h4>
        You can find me on:
      </h4>
      <ul className={ styles.socialList }>
        <li className={ styles.socialContact }>
          <TwitterIcon />
          <a
            href="https://twitter.com/_pastelsky"
            target="_blank"
            rel="noopener"
          >
            @_pastelsky
          </a>
        </li>
        <li className={ styles.socialContact }>
          <GithubIcon />
          <a
            href="https://github.com/pastelsky"
            target="_blank"
            rel="noopener"
          >
            pastelsky
          </a>
        </li>
      </ul>
      <p>
        Or we can disucss over <a href="mailto:shubham.kanodia10@gmail.com">email</a>.
      </p>
    </div>
  )
}
