import React from 'react'
import BlockHero from '../../components/BlockHero'
import BlockSection from '../../components/BlockSection'

const Blocks = ({darkMode}) => {
  return (
    <div className='grow'>
     <BlockHero darkMode={darkMode}/>
     <BlockSection darkMode={darkMode}/>
      
    </div>
  )
}

export default Blocks
