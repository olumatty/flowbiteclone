import React from 'react'
import ProBlock from '../../components/ProBlock'
import Features from '../../components/Features'
import ProFlow from '../../components/ProFlow'
import Blocks from '../../components/Blocks'
import ProUI from '../../components/ProUI'

const ProVersion = ({darkMode}) => {
  return (
    <div>
      <ProBlock darkMode={darkMode}/>
      <Features darkMode={darkMode}/>
      <ProFlow darkMode={darkMode}/>
      <Blocks darkMode={darkMode}/>
      <ProUI darkMode ={darkMode}/>
    </div>
  )
}

export default ProVersion
