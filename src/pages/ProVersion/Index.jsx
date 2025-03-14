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
import Freelancers from '../../components/Freelancers'
import Question from '../../components/Questions'
import Price from "../../components/Price";

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
      <Freelancers darkMode ={darkMode}/>
      <Price darkMode={darkMode}/>
      <Question darkMode= {darkMode}/>
      <NewsLetter darkMode={darkMode}/>
    </div>
  )
}

export default ProVersion
