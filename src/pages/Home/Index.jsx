import React from 'react'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Technologies from '../../components/Technologies'
import Project from '../../components/Project'

const Home = ({darkMode, setDarkMode}) => {
  return (
    <div className='grow'> 
      <Hero darkMode={darkMode}/>
      <Features darkMode={darkMode} />
      <Technologies darkMode={darkMode} />
      <Project darkMode= {darkMode}/>
    </div>
  )
}

export default Home
