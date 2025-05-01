import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import MyProfilePage from './MyProfile'

export default function index() {
  return (
    <div>
        <Header/>
        <MyProfilePage/>
        <Footer/>
    </div>
  )
}
