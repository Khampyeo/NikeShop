import React from 'react'
import Feature from '../../Component/homePageComponent/featureHomePage/Feature'
import AdsHomePage from '../../Component/homePageComponent/adsHomePage/AdsHomePage'
import TypesIntroduce from '../../Component/homePageComponent/typesIntroduce/TypesIntroduce'
import GearUp from '../../Component/homePageComponent/gearUp/GearUp'
import MoreNike from '../../Component/homePageComponent/moreNike/MoreNike'
import HintCategory from '../../Component/homePageComponent/hintCategory/HintCategory'
import VideoHomePage from '../../Component/homePageComponent/videoHomePage/VideoHomePage'
import { Fragment } from 'react'
import HeaderAds from '../../Component/header/HeaderAds/HeaderAds'

export default function HomePage() {
  return (
    <Fragment>
      <HeaderAds/>
      <div className='
      lg:px-9
      w-full px-4 max-w-[1800px] mx-auto
      '>
        <AdsHomePage />
        <VideoHomePage />
        <TypesIntroduce />
        <GearUp />
        <Feature />
        <MoreNike />
        <HintCategory />
      </div>
    </Fragment>

  )
}
