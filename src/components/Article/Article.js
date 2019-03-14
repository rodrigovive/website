import React from 'react'
import {Link} from 'gatsby'
import styles from './Article.module.scss'

export default (props) => (

  <Link to={props.to}>
    {console.log(props)}
    <article className={styles.articleBox} key={props.id}>
      <div className={styles.left}>
        <img src={`https://source.unsplash.com/150x150/?${props.keywords}`} alt={props.title}/>
      </div>
      <div className={styles.right}>
        <h3>
          {props.title}
        </h3>
        <div className={styles.date}>{props.date}

        </div>
        <div className={styles.descriptive}>
          {props.excerpt}
        </div>
      </div>
    </article>
  </Link>

)