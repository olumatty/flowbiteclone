import React from 'react'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Technologies from '../../components/Technologies'
import Project from '../../components/Project'
import Blocks from '../../components/Blocks'
import Figma from '../../components/Figma'
import DarkMode from '../../components/DarkMode'
import RTL from '../../components/RTL'
import FlowSVg from '../../components/FlowSVg'

const Home = ({darkMode}) => {
  return (
    <div className='grow'> 
      <Hero darkMode={darkMode}/>
      <Features darkMode={darkMode} />
      <Technologies darkMode={darkMode} />
      <Project darkMode= {darkMode}/>
      <Blocks darkMode={darkMode}/> 
      <Figma darkMode={darkMode}/>
      <DarkMode darkMode={darkMode}/>
      <RTL darkMode={darkMode}/>
      <FlowSVg darkMode={darkMode}/>
    </div>
  )
}

export default Home
