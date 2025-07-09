'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import PopularCities from '@/components/PopularCities'
import Footer from '@/components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Features Section */}
        <Features />
        
        {/* Popular Cities Section */}
        <PopularCities />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage
