import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Notifications from './Notification.js'

export default function index() {
  return (
    <div>
        <Header/>
        <Notifications/>
        <Footer/>
    </div>
  )
}
