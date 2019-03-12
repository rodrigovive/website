import React from 'react'
import {Link} from 'gatsby'
import styles from './Header.module.scss'

// HeaderLink component

const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

const SocialButton = props => {

  let style = '';
  let url = '';

  if (props.site === 'twitter') {
    style = styles.buttonTwitter;
    url = 'https://twitter.com/' + props.username;
  }
  else if (props.site === 'linkedin') {
    style = styles.buttonLinkedin;
    url = 'https://www.linkedin.com/in/' + props.username;
  }
  else if (props.site === 'github') {
    style = styles.buttonGithub;
    url = 'https://www.github.com/' + props.username;
  }

  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )

}
export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <HomeButton to='/' text='My gatsby blog' />
      <SocialButton site="github" username='rodrigovive'></SocialButton>
      <SocialButton site='linkedin' username='jhair-rodrigo-viveros-cordova-a92197130' />
      <SocialButton site='twitter' username='RodrigoVCordova' />
    </div>

    <div className={styles.row}>
      <HeaderLink to='/' text='ARTICLES' />
      <HeaderLink to='' text='ABOUT' />
    </div>

  </header>
)