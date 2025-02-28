import React from 'react'
import ProBlock from '../../components/ProBlock'
import Features from '../../components/Features'
import ProFlow from '../../components/ProFlow'

const ProVersion = ({darkMode}) => {
  return (
    <div>
      <ProBlock darkMode={darkMode}/>
      <Features darkMode={darkMode}/>
      <ProFlow darkMode={darkMode}/>
    </div>
  )
}

export default ProVersion
