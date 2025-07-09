'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Clock, Users, Home, Coffee, Calendar, Heart, MessageCircle, Shield } from 'lucide-react'

interface BuddyProfileProps {
  buddy: {
    id: string
    name: string
    avatar: string
    city: string
    country: string
    rating: number
    reviewCount: number
    responseTime: number
    languages: string[]
    bio: string
    verified: boolean
    backgroundChecked: boolean
    specialties: string[]
    tiers: {
      cityTour: {
        available: boolean
        hourlyRate: number
        description: string
      }
      homeExperience: {
        available: boolean
        priceRange: [number, number]
        experiences: string[]
      }
      vipLocalLife: {
        available: boolean
        dailyRate: number
        description: string
      }
    }
  }
}

const BuddyProfile: React.FC<BuddyProfileProps> = ({ buddy }) => {
  const [selectedTier, setSelectedTier] = useState<'cityTour' | 'homeExperience' | 'vipLocalLife'>('cityTour')

  const tierConfig = {
    cityTour: {
      title: 'City Tour',
      icon: MapPin,
      color: 'bg-blue-500',
      description: 'Explore the city with a local guide'
    },
    homeExperience: {
      title: 'Home Experience',
      icon: Home,
      color: 'bg-green-500',
      description: 'Get invited to authentic local experiences'
    },
    vipLocalLife: {
      title: 'VIP Local Life',
      icon: Heart,
      color: 'bg-purple-500',
      description: 'Full immersion in local lifestyle'
    }
  }

  const renderTierContent = () => {
    const tier = buddy.tiers[selectedTier]
    const config = tierConfig[selectedTier]

    if (!tier.available) {
      return (
        <div className="text-center py-8 text-gray-500">
          <div className="text-lg font-medium mb-2">Not Available</div>
          <p>This buddy doesn't offer {config.title.toLowerCase()} experiences.</p>
        </div>
      )
    }

    switch (selectedTier) {
      case 'cityTour':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">${tier.hourlyRate}/hour</h3>
                <p className="text-gray-600">Minimum 2 hours</p>
              </div>
              <Button variant="gradient" size="lg">Book Tour</Button>
            </div>
            <p className="text-gray-700">{tier.description}</p>
            <div className="flex flex-wrap gap-2">
              {buddy.specialties.map((specialty, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )

      case 'homeExperience':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  ${tier.priceRange[0]}-${tier.priceRange[1]}/experience
                </h3>
                <p className="text-gray-600">2-4 hours per experience</p>
              </div>
              <Button variant="gradient" size="lg">Book Experience</Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tier.experiences.map((experience, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                  <Coffee className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">{experience}</span>
                </div>
              ))}
            </div>
          </div>
        )

      case 'vipLocalLife':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">${tier.dailyRate}/day</h3>
                <p className="text-gray-600">Full day experience (8-10 hours)</p>
              </div>
              <Button variant="gradient" size="lg">Book VIP Day</Button>
            </div>
            <p className="text-gray-700">{tier.description}</p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">What's included:</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Personal local guide for the entire day</li>
                <li>• Meet local friends and family</li>
                <li>• Authentic local meals</li>
                <li>• Hidden gems and secret spots</li>
                <li>• Transportation assistance</li>
              </ul>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative h-48 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-end space-x-4">
            <div className="relative">
              <img 
                src={buddy.avatar} 
                alt={buddy.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              {buddy.verified && (
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">{buddy.name}</h1>
              <div className="flex items-center space-x-2 mt-1">
                <MapPin className="w-4 h-4" />
                <span>{buddy.city}, {buddy.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{buddy.rating}</span>
              <span className="text-gray-600">({buddy.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Responds in {buddy.responseTime}min</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span>Speaks {buddy.languages.join(', ')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {buddy.verified && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Verified
              </span>
            )}
            {buddy.backgroundChecked && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Background Checked
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 p-6 border-r border-gray-200">
          <div className="space-y-6">
            {/* Bio */}
            <div>
              <h3 className="font-semibold mb-3">About {buddy.name}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{buddy.bio}</p>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {buddy.languages.map((language, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message {buddy.name}
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Check Availability
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Tier Selector */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Choose Your Experience</h2>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(tierConfig).map(([key, config]) => {
                const IconComponent = config.icon
                const isSelected = selectedTier === key
                const isAvailable = buddy.tiers[key as keyof typeof buddy.tiers].available
                
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedTier(key as typeof selectedTier)}
                    disabled={!isAvailable}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isSelected 
                        ? 'border-primary-500 bg-primary-50' 
                        : isAvailable 
                          ? 'border-gray-200 hover:border-gray-300' 
                          : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isAvailable ? config.color : 'bg-gray-300'
                      }`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">{config.title}</h3>
                        <p className="text-xs text-gray-600">{config.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tier Content */}
          <div className="bg-gray-50 rounded-lg p-6">
            {renderTierContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuddyProfile
