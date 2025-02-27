import React from 'react'
import BlockHero from '../../components/BlockHero'
import BlockSection from '../../components/BlockSection'
import NewsLetter from '../../components/NewsLetter'

const Blocks = ({darkMode}) => {
  return (
    <div className='grow'>
     <BlockHero darkMode={darkMode}/>
     <BlockSection darkMode={darkMode}/>
     <NewsLetter darkMode={darkMode}/>
      
    </div>
  )
}

export default Blocks
