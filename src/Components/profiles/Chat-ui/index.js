import React from 'react'
import ChatApp from './Chat.js';
import Header from '../Header'
import Footer from '../Footer'

export default function index() {
  return (
    <div>
      <Header/>
       <ChatApp/> 
       <Footer/>
    </div>
  )
}
