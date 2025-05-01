import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SearchById from './SearchById'

export default function index() {
  return (
    <div>
        <Header/>
        <SearchById/>
        <Footer/>
    </div>
  )
}
