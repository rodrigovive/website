import React from 'react'
import {Link} from 'gatsby'
import Title from '../components/Title/Title'

export default () => (
  <div>
    <Link to='/'>Home</Link>
    <Title text='This is a about page' />
  </div>
)