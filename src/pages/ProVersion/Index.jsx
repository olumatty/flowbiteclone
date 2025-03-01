import React from 'react'
import ProBlock from '../../components/ProBlock'
import Features from '../../components/Features'
import ProFlow from '../../components/ProFlow'
import Blocks from '../../components/Blocks'
import ProUI from '../../components/ProUI'
import ProMarket from '../../components/ProMarket'
import ProHero from '../../components/ProHero'
import NewsLetter from "../../components/NewsLetter"
import RoadMap from '../../components/RoadMap'

const ProVersion = ({darkMode}) => {
  return (
    <div>
      <ProBlock darkMode={darkMode}/>
      <Features darkMode={darkMode}/>
      <ProFlow darkMode={darkMode}/>
      <Blocks darkMode={darkMode}/>
      <ProUI darkMode ={darkMode}/>
      <ProMarket darkMode={darkMode}/>
      <ProHero darkMode={darkMode}/>
      <RoadMap darkMode ={darkMode}/>
      <NewsLetter darkMode={darkMode}/>
    </div>
  )
}

export default ProVersion
