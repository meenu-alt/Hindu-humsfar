import React from 'react'
import BlogDetail from './BlogPost';
import Header from '../Header'
import Footer from '../Footer'

export default function index() {
  return (
    <div>
      <Header/>
       <BlogDetail/> 
       <Footer/>
    </div>
  )
}
