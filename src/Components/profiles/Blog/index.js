import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import BlogPage from './Blog'
import NewsletterSubscription from './BlogNewsletter'

export default function index() {
  return (
    <div>
        <Header/>
        <BlogPage/>
        <NewsletterSubscription/>
        <Footer/>
    </div>
  )
}
