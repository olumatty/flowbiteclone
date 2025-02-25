import React from 'react'
import Hero from '../../components/Hero'

const Home = ({darkMode, setDarkMode}) => {
  return (
    <div className='grow'> 
      <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default Home
