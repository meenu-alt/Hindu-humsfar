import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import RecentlyJoindMembers from './RecentlyJoinedMembers'

export default function index() {
  return (
    <div>
        <Header/>
        <RecentlyJoindMembers/>
        <Footer/>
    </div>
  )
}
