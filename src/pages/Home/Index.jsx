import React from 'react'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Technologies from '../../components/Technologies'
import Project from '../../components/Project'
import Blocks from '../../components/Blocks'
import Figma from '../../components/Figma'

const Home = ({darkMode}) => {
  return (
    <div className='grow'> 
      <Hero darkMode={darkMode}/>
      <Features darkMode={darkMode} />
      <Technologies darkMode={darkMode} />
      <Project darkMode= {darkMode}/>
      <Blocks darkMode={darkMode}/> 
      <Figma darkMode={darkMode}/>
    </div>
  )
}

export default Home
