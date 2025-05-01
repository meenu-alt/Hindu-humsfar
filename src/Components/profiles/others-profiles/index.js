import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ProfilePage from './ViewProfile'

export default function index() {
  return (
    <div>
        <Header/>
        <ProfilePage/>
        <Footer/>
    </div>
  )
}
