import React from 'react'
import Hero from '../../components/Hero'
import Features from '../../components/Features'

const Home = ({darkMode, setDarkMode}) => {
  return (
    <div className='grow'> 
      <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Features darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Home
