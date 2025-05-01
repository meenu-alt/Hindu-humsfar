import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EditProfileForm from './EditYourProfile.js'

export default function index() {
  return (
    <div>
        <Header/>
        <EditProfileForm/>
        <Footer/>
    </div>
  )
}
