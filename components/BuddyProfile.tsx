'use client'

import React, { useState } from 'react'
import { Star, MapPin, Calendar, Clock, Users, MessageCircle, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock buddy data
const mockBuddyData = {
  id: 'buddy-123',
  name: 'Zoltán Kovács',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  coverPhoto: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=400&fit=crop',
  location: 'Budapest, Hungary',
  joinedDate: 'October 2023',
  languages: ['Hungarian', 'English', 'German'],
  rating: 4.9,
  reviewCount: 127,
  responseRate: 98,
  responseTime: '2 hours',
  isVerified: true,
  isOnline: true,
  bio: "Born and raised in Budapest, I'm passionate about showing visitors the real soul of my city. I love taking people to hidden gems that only locals know about - from secret ruin bars to the best lángos spots. I'm a history enthusiast and can tell you fascinating stories about every corner of Budapest.",
  experiences: [
    {
      id: 'exp-1',
      title: 'Mystery Local Experience',
      description: 'Discover Budapest like a true local! I\'ll take you to my favorite hidden spots.',
      duration: '3 hours',
      price: 35,
      rating: 4.9,
      reviewCount: 43,
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=300&h=200&fit=crop'
    },
    {
      id: 'exp-2',
      title: 'Food & Market Tour',
      description: 'Taste authentic Hungarian cuisine at local markets and traditional restaurants.',
      duration: '4 hours',
      price: 55,
      rating: 5.0,
      reviewCount: 38,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop'
    },
    {
      id: 'exp-3',
      title: 'Nightlife Adventure',
      description: 'Experience Budapest\'s famous nightlife scene with a local guide.',
      duration: '5 hours',
      price: 45,
      rating: 4.8,
      reviewCount: 29,
      image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=300&h=200&fit=crop'
    }
  ],
  reviews: [
    {
      id: 'rev-1',
      userName: 'Sarah M.',
      userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: 'June 2025',
      comment: 'Zoltán was an amazing guide! He showed us places we never would have found on our own. The hidden ruin bars were incredible. Highly recommend!',
      experience: 'Mystery Local Experience'
    },
    {
      id: 'rev-2',
      userName: 'Mike R.',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: 'May 2025',
      comment: 'Best food tour ever! Zoltán knows all the best spots for authentic Hungarian food. The market visit was fantastic.',
      experience: 'Food & Market Tour'
    },
    {
      id: 'rev-3',
      userName: 'Emma L.',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: 'April 2025',
      comment: 'Zoltán made our Budapest nightlife experience unforgettable. Great recommendations and such a fun person to hang out with!',
      experience: 'Nightlife Adventure'
    }
  ],
  pricing: [
    {
      type: 'hourly',
      rate: 25,
      description: 'Perfect for quick tours or specific activities'
    },
    {
      type: 'half-day',
      rate: 80,
      description: '4-hour experiences with deeper exploration'
    },
    {
      type: 'full-day',
      rate: 140,
      description: 'Complete day adventures with multiple activities'
    }
  ]
}

export default function BuddyProfile() {
  const [selectedExperience, setSelectedExperience] = useState(0)
  const [showAllReviews, setShowAllReviews] = useState(false)

  const nextExperience = () => {
    setSelectedExperience((prev) => (prev + 1) % mockBuddyData.experiences.length)
  }

  const prevExperience = () => {
    setSelectedExperience((prev) => (prev - 1 + mockBuddyData.experiences.length) % mockBuddyData.experiences.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: `url(${mockBuddyData.coverPhoto})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-end justify-between">
            <div className="flex items-end space-x-4">
              <img 
                src={mockBuddyData.avatar} 
                alt={mockBuddyData.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <div className="text-white mb-2">
                <div className="flex items-center space-x-2 mb-1">
                  <h1 className="text-3xl font-bold">{mockBuddyData.name}</h1>
                  {mockBuddyData.isVerified && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                  {mockBuddyData.isOnline && (
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Online</span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {mockBuddyData.location}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                    {mockBuddyData.rating} ({mockBuddyData.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">About Zoltán</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{mockBuddyData.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 mx-auto text-primary-600 mb-1" />
                  <div className="text-sm font-medium">Response time</div>
                  <div className="text-xs text-gray-500">{mockBuddyData.responseTime}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 mx-auto text-primary-600 mb-1" />
                  <div className="text-sm font-medium">Response rate</div>
                  <div className="text-xs text-gray-500">{mockBuddyData.responseRate}%</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 mx-auto text-primary-600 mb-1" />
                  <div className="text-sm font-medium">Member since</div>
                  <div className="text-xs text-gray-500">{mockBuddyData.joinedDate}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-5 h-5 mx-auto text-primary-600 mb-1" />
                  <div className="text-sm font-medium">Languages</div>
                  <div className="text-xs text-gray-500">{mockBuddyData.languages.join(', ')}</div>
                </div>
              </div>
            </div>

            {/* Experiences Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Experiences</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={prevExperience}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextExperience}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${selectedExperience * 100}%)` }}
                  >
                    {mockBuddyData.experiences.map((experience, index) => (
                      <div key={experience.id} className="w-full flex-shrink-0">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                          <img 
                            src={experience.image} 
                            alt={experience.title}
                            className="w-full md:w-64 h-48 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold">{experience.title}</h3>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-current text-yellow-400" />
                                <span className="text-sm font-medium">{experience.rating}</span>
                                <span className="text-sm text-gray-500">({experience.reviewCount})</span>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">{experience.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {experience.duration}
                                </span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold">${experience.price}</div>
                                <Button variant="gradient" size="sm" className="mt-2">Book Experience</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {mockBuddyData.experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedExperience(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedExperience ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <span className="font-medium">{mockBuddyData.rating}</span>
                  <span className="text-gray-500">({mockBuddyData.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {(showAllReviews ? mockBuddyData.reviews : mockBuddyData.reviews.slice(0, 2)).map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.userAvatar} 
                        alt={review.userName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{review.userName}</h4>
                            <p className="text-sm text-gray-500">{review.experience} • {review.date}</p>
                          </div>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {mockBuddyData.reviews.length > 2 && (
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                >
                  {showAllReviews ? 'Show Less' : `Show All ${mockBuddyData.reviewCount} Reviews`}
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Pricing</h3>
              
              <div className="space-y-4">
                {mockBuddyData.pricing.map((tier, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">${tier.rate}/{tier.type === 'hourly' ? 'hour' : 'day'}</h3>
                        <p className="text-gray-600">Minimum 2 hours</p>
                      </div>
                      <Button variant="gradient" size="lg">Book Tour</Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" className="w-full mb-3">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Response time: {mockBuddyData.responseTime}
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{mockBuddyData.location}</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-500">Map View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
