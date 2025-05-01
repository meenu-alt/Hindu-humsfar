import React from 'react'
import Banner from './Bnner'
import Header from './Header'
import MatchMadeInHeaven from './MatchMadeInHeaven'
import ThreeEasySteps from './ThreeStep'
import RecentlyJoined from './RecentlyJoined'
import LoveInNumbers from './LoveInNumbers'
import LoveStories from './LoveStory'
import ForeverJourney from './ForeverJourney'
import WeddingCollageSection from './LoveCaptured'


export default function index() {
  return (
    <div>
        <Header/>
        <Banner/>
        <MatchMadeInHeaven/>
        <ThreeEasySteps/>
        <RecentlyJoined/>
        <LoveInNumbers/>
        <WeddingCollageSection/>
        <LoveStories/>
        <ForeverJourney/>


    </div>
  )
}
