'use client'

import React from 'react'
import { Search, MessageCircle, Heart } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Choose Your City",
      description: "Browse verified local buddies in your destination. Each buddy is background-checked and speaks your language.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Book & Connect", 
      description: "Book your buddy by the hour. Chat beforehand to plan what you'd like to see and do.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Explore Like a Local",
      description: "Meet your buddy and explore the city together. Discover hidden gems, local favorites, and make a real connection.",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How GetLocalBuddy Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Connect with a local buddy in three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0" />
                )}

                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary-50 rounded-full">
            <span className="text-primary-700 font-medium">Ready to start your adventure?</span>
            <a 
              href="/find-buddy" 
              className="ml-3 text-primary-600 hover:text-primary-700 font-semibold underline underline-offset-2 transition-colors"
            >
              Find a buddy now →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
