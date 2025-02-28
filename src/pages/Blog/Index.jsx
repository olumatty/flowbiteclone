import React from 'react'
import Blogs from '../../components/Blogs'
import NewsLetter from '../../components/NewsLetter'


const Blog = ({darkMode}) => {
  return (
    <div>
      <Blogs darkMode={darkMode} />
      <NewsLetter darkMode={darkMode}/>
    </div>
  )
}

export default Blog
