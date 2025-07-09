'use client'

import React from 'react'
import { Shield, Sparkles, Lock, DollarSign, Clock, Star } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Locals",
      description: "Every buddy is identity-verified and background-checked for your safety and peace of mind.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Sparkles,
      title: "Authentic Experiences",
      description: "No scripted tours. Your buddy tailors the time to your interests and shows you their personal favorites.",
      color: "text-purple-600", 
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Lock,
      title: "Safe & Secure",
      description: "Secure payments, emergency contacts, and real-time location sharing keep you safe.",
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      borderColor: "border-blue-200"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Starting from just $20 per hour. No hidden fees, no tourist traps - just honest local guidance.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Book by the hour, from 2 hours to a full day. Perfect for any schedule or budget.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Star,
      title: "Highly Rated",
      description: "Average rating of 4.9/5 stars from thousands of travelers who've found their perfect local buddy.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50", 
      borderColor: "border-yellow-200"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose GetLocalBuddy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another booking platform. We're building a community of authentic local connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className={`group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 ${feature.borderColor} hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Cities Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
