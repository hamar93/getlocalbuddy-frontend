'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingCalendar from '@/components/BookingCalendar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Star, Shield, CreditCard, Lock } from 'lucide-react'

// Mock buddy data - in real app this would be fetched based on buddyId
const mockBuddy = {
  id: '1',
  name: 'Zoltán',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  city: 'Budapest',
  country: 'Hungary',
  rating: 4.9,
  reviewCount: 127,
  verified: true,
  backgroundChecked: true,
  tiers: {
    cityTour: { available: true, hourlyRate: 25, description: 'Explore Budapest like a local' },
    homeExperience: { available: true, priceRange: [45, 60], description: 'Authentic home experiences' },
    vipLocalLife: { available: true, dailyRate: 150, description: 'Full day local immersion' },
    mysteryLocal: { available: true, price: 35, description: 'Surprise experience!' }
  }
}

export default function BookingPage({ params }: { params: { buddyId: string } }) {
  const router = useRouter()
  const [selectedTier, setSelectedTier] = useState<string>('cityTour')
  const [bookingStep, setBookingStep] = useState<'select' | 'calendar' | 'payment'>('select')
  const [bookingDetails, setBookingDetails] = useState<{
    date?: Date
    timeSlot?: string
    duration?: number
    totalPrice?: number
  }>({})

  const tierOptions = [
    {
      key: 'cityTour',
      title: 'City Tour',
      price: mockBuddy.tiers.cityTour.hourlyRate,
      type: 'hourly' as const,
      duration: 'Per hour (min 2h)',
      description: mockBuddy.tiers.cityTour.description,
      available: mockBuddy.tiers.cityTour.available
    },
    {
      key: 'homeExperience',
      title: 'Home Experience',
      price: mockBuddy.tiers.homeExperience.priceRange[0],
      type: 'experience' as const,
      duration: '3-4 hours',
      description: mockBuddy.tiers.homeExperience.description,
      available: mockBuddy.tiers.homeExperience.available
    },
    {
      key: 'vipLocalLife',
      title: 'VIP Local Life',
      price: mockBuddy.tiers.vipLocalLife.dailyRate,
      type: 'daily' as const,
      duration: 'Full day (8-10h)',
      description: mockBuddy.tiers.vipLocalLife.description,
      available: mockBuddy.tiers.vipLocalLife.available
    },
    {
      key: 'mysteryLocal',
      title: 'Mystery Local',
      price: mockBuddy.tiers.mysteryLocal.price,
      type: 'experience' as const,
      duration: '3-4 hours',
      description: mockBuddy.tiers.mysteryLocal.description,
      available: mockBuddy.tiers.mysteryLocal.available
    }
  ]

  const selectedTierConfig = tierOptions.find(tier => tier.key === selectedTier)!

  const handleDateTimeSelect = (date: Date, timeSlot: string, duration?: number) => {
    const totalPrice = selectedTierConfig.type === 'hourly' 
      ? selectedTierConfig.price * (duration || 2)
      : selectedTierConfig.price

    setBookingDetails({
      date,
      timeSlot,
      duration,
      totalPrice
    })
    setBookingStep('payment')
  }

  const proceedToCalendar = () => {
    setBookingStep('calendar')
  }

  const handlePayment = () => {
    // In real app, integrate with Stripe here
    alert('Redirecting to Stripe payment...')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Profile
          </button>

          {/* Buddy Info Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={mockBuddy.avatar} 
                  alt={mockBuddy.name}
                  className="w-16 h-16 rounded-full"
                />
                {mockBuddy.verified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{mockBuddy.name}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{mockBuddy.city}, {mockBuddy.country}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{mockBuddy.rating}</span>
                    <span className="text-gray-500 ml-1">({mockBuddy.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${bookingStep === 'select' ? 'text-primary-600' : bookingStep === 'calendar' || bookingStep === 'payment' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${bookingStep === 'select' ? 'bg-primary-600 text-white' : bookingStep === 'calendar' || bookingStep === 'payment' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="ml-2 font-medium">Select Experience</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className={`flex items-center ${bookingStep === 'calendar' ? 'text-primary-600' : bookingStep === 'payment' ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${bookingStep === 'calendar' ? 'bg-primary-600 text-white' : bookingStep === 'payment' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="ml-2 font-medium">Choose Date & Time</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className={`flex items-center ${bookingStep === 'payment' ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${bookingStep === 'payment' ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="ml-2 font-medium">Payment</span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          {bookingStep === 'select' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Choose Your Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tierOptions.filter(tier => tier.available).map(tier => (
                  <div
                    key={tier.key}
                    onClick={() => setSelectedTier(tier.key)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedTier === tier.key 
                        ? 'border-primary-500 bg-primary-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{tier.title}</h3>
                      <div className="text-right">
                        <div className="font-bold text-primary-600">${tier.price}</div>
                        <div className="text-sm text-gray-500">{tier.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{tier.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button
                  onClick={proceedToCalendar}
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  Continue to Calendar
                </Button>
              </div>
            </div>
          )}

          {bookingStep === 'calendar' && (
            <BookingCalendar
              selectedTier={selectedTierConfig.title}
              tierConfig={{
                price: selectedTierConfig.price,
                duration: selectedTierConfig.duration,
                type: selectedTierConfig.type
              }}
              onDateTimeSelect={handleDateTimeSelect}
            />
          )}

          {bookingStep === 'payment' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Complete Your Booking</h2>
              
              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">{selectedTierConfig.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{bookingDetails.date?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{bookingDetails.timeSlot}</span>
                  </div>
                  {bookingDetails.duration && (
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{bookingDetails.duration} hours</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${bookingDetails.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 mb-4">
                  <Lock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Secure payment powered by Stripe</span>
                </div>
                
                <Button
                  onClick={handlePayment}
                  variant="gradient"
                  size="lg"
                  className="w-full flex items-center justify-center"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay ${bookingDetails.totalPrice} with Stripe
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  You won't be charged until your booking is confirmed by {mockBuddy.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}