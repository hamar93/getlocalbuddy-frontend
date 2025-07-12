'use client'

import React, { useState } from 'react'
import { 
  Heart, MessageCircle, Share2, MapPin, Clock, Users, 
  Star, Zap, Calendar, DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type BuddyPost = {
  id: string
  buddyId: string
  buddyName: string
  buddyAvatar: string
  buddyRating: number
  content: string
  images?: string[]
  experienceType: 'food' | 'culture' | 'nightlife' | 'adventure' | 'nature'
  availableSpots: number
  price: number
  datetime: Date
  location: string
  tags: string[]
  likes: number
  bookings: number
  isUrgent: boolean
  createdAt: Date
}

interface FeedPostProps {
  post: BuddyPost
  onLike?: (postId: string) => void
  onBook?: (postId: string) => void
  onShare?: (postId: string) => void
}

export default function FeedPost({ post, onLike, onBook, onShare }: FeedPostProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
    onLike?.(post.id)
  }

  const getExperienceIcon = () => {
    switch (post.experienceType) {
      case 'food': return '🍕'
      case 'culture': return '🎭'
      case 'nightlife': return '🍻'
      case 'adventure': return '⚡'
      case 'nature': return '🌿'
      default: return '📍'
    }
  }

  const getExperienceColor = () => {
    switch (post.experienceType) {
      case 'food': return 'bg-orange-100 text-orange-800'
      case 'culture': return 'bg-purple-100 text-purple-800'
      case 'nightlife': return 'bg-pink-100 text-pink-800'
      case 'adventure': return 'bg-red-100 text-red-800'
      case 'nature': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (hours < 0) return 'Past event'
    if (hours < 1) return 'Starting soon!'
    if (hours < 24) return `In ${hours} hours`
    if (days === 1) return 'Tomorrow'
    return `In ${days} days`
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)

    if (minutes < 1) return 'now'
    if (minutes < 60) return `${minutes}m`
    if (hours < 24) return `${hours}h`
    return date.toLocaleDateString()
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Buddy Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img 
            src={post.buddyAvatar} 
            alt={post.buddyName}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900">{post.buddyName}</h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm text-gray-600">{post.buddyRating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">{formatTimeAgo(post.createdAt)}</p>
          </div>
        </div>
        
        {post.isUrgent && (
          <div className="flex items-center space-x-1 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
            <Zap className="w-3 h-3" />
            <span>Urgent</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-gray-900 leading-relaxed mb-3">{post.content}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getExperienceColor()}`}>
            {getExperienceIcon()} {post.experienceType}
          </span>
          {post.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Images */}
        {post.images && post.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {post.images.slice(0, 2).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt="Experience preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{post.datetime.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{formatTime(post.datetime)}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{post.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{post.availableSpots} spots left</span>
          </div>
        </div>
      </div>

      {/* Price & Booking */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span className="text-xl font-bold text-gray-900">${post.price}</span>
          <span className="text-sm text-gray-500">per person</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {post.availableSpots <= 2 && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
              Almost full!
            </span>
          )}
          <Button 
            variant="gradient" 
            size="sm"
            onClick={() => onBook?.(post.id)}
            disabled={post.availableSpots === 0}
          >
            {post.availableSpots === 0 ? 'Sold Out' : `Book Now (${post.availableSpots} left)`}
          </Button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>
          
          <div className="flex items-center space-x-2 text-gray-500">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{post.bookings} booked</span>
          </div>
        </div>
        
        <button 
          onClick={() => onShare?.(post.id)}
          className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Share</span>
        </button>
      </div>
    </div>
  )
}