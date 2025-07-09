'use client'

import React from 'react'
import Link from 'next/link'
import { Star, MapPin, Clock, Users, Home, HelpCircle, Heart, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BuddyCardProps {
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
      }
      homeExperience: {
        available: boolean
        priceRange: [number, number]
      }
      vipLocalLife: {
        available: boolean
        dailyRate: number
      }
      mysteryLocal: {
        available: boolean
        price: number
        surpriseLevel: 'mild' | 'medium' | 'wild'
      }
    }
  }
}

const BuddyCard: React.FC<BuddyCardProps> = ({ buddy }) => {
  const availableTiers = []
  const startingPrice = Math.min(
    buddy.tiers.cityTour.available ? buddy.tiers.cityTour.hourlyRate : Infinity,
    buddy.tiers.homeExperience.available ? buddy.tiers.homeExperience.priceRange[0] : Infinity,
    buddy.tiers.vipLocalLife.available ? buddy.tiers.vipLocalLife.dailyRate : Infinity,
    buddy.tiers.mysteryLocal.available ? buddy.tiers.mysteryLocal.price : Infinity
  )

  if (buddy.tiers.cityTour.available) availableTiers.push('City Tour')
  if (buddy.tiers.homeExperience.available) availableTiers.push('Home Experience')
  if (buddy.tiers.vipLocalLife.available) availableTiers.push('VIP Local Life')
  if (buddy.tiers.mysteryLocal.available) availableTiers.push('Mystery Local')

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'City Tour': return <MapPin className="w-3 h-3" />
      case 'Home Experience': return <Home className="w-3 h-3" />
      case 'VIP Local Life': return <Heart className="w-3 h-3" />
      case 'Mystery Local': return <HelpCircle className="w-3 h-3" />
      default: return null
    }
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'City Tour': return 'bg-blue-100 text-blue-800'
      case 'Home Experience': return 'bg-green-100 text-green-800'
      case 'VIP Local Life': return 'bg-purple-100 text-purple-800'
      case 'Mystery Local': return 'bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      {/* Header with Avatar */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>
        <div className="absolute -bottom-6 left-6">
          <div className="relative">
            <img 
              src={buddy.avatar} 
              alt={buddy.name}
              className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
            />
            {buddy.verified && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-2.5 h-2.5 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-8 px-6 pb-6">
        {/* Name and Location */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
              {buddy.name}
            </h3>
            {buddy.tiers.mysteryLocal.available && (
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                Mystery!
              </div>
            )}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{buddy.city}, {buddy.country}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="font-medium">{buddy.rating}</span>
              <span className="text-gray-500 ml-1">({buddy.reviewCount})</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span>{buddy.responseTime}min</span>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Users className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">Speaks: {buddy.languages.slice(0, 2).join(', ')}</span>
            {buddy.languages.length > 2 && (
              <span className="text-sm text-gray-500 ml-1">+{buddy.languages.length - 2}</span>
            )}
          </div>
        </div>

        {/* Available Tiers */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {availableTiers.slice(0, 3).map((tier, index) => (
              <span 
                key={index}
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTierColor(tier)}`}
              >
                {getTierIcon(tier)}
                <span className="ml-1">{tier}</span>
              </span>
            ))}
            {availableTiers.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                +{availableTiers.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
          {buddy.bio}
        </p>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {buddy.specialties.slice(0, 3).map((specialty, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {specialty}
              </span>
            ))}
            {buddy.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                +{buddy.specialties.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">From ${startingPrice}</span>
            <span className="text-gray-500 text-sm ml-1">/experience</span>
          </div>
          <Link href={`/buddy/${buddy.id}`}>
            <Button variant="gradient" size="sm" className="group-hover:scale-105 transition-transform">
              View Profile
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        {(buddy.verified || buddy.backgroundChecked) && (
          <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-100">
            {buddy.verified && (
              <span className="flex items-center text-xs text-green-600">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </span>
            )}
            {buddy.backgroundChecked && (
              <span className="flex items-center text-xs text-blue-600">
                <Shield className="w-3 h-3 mr-1" />
                Background Checked
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default BuddyCard
