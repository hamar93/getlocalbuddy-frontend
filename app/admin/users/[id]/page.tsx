'use client'

import React, { useState } from 'react'
import { 
  ArrowLeft, Mail, Phone, MapPin, Calendar, Star, Shield, 
  MessageCircle, DollarSign, Clock, AlertTriangle, Eye,
  MoreVertical, Ban, CheckCircle, XCircle, Flag
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'

// Mock user data
const mockUserData: { [key: string]: any } = {
  'U-001': {
    id: 'U-001',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 555 0123',
    type: 'traveler',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face',
    joinedDate: '2024-12-15',
    status: 'active',
    city: 'New York',
    country: 'USA',
    totalBookings: 12,
    totalSpent: 540,
    lastActivity: '2025-07-08',
    bio: 'Love exploring new cultures and meeting locals! Always looking for authentic experiences.',
    verifications: ['email', 'phone', 'id'],
    languages: ['English', 'Spanish'],
    bookingHistory: [
      {
        id: 'BK-1001',
        buddy: 'Zoltán Kovács',
        city: 'Budapest',
        experience: 'Mystery Local',
        date: '2025-07-15',
        amount: 35,
        status: 'confirmed'
      },
      {
        id: 'BK-0987',
        buddy: 'Maria García',
        city: 'Barcelona',
        experience: 'Food Tour',
        date: '2025-06-20',
        amount: 45,
        status: 'completed'
      },
      {
        id: 'BK-0876',
        buddy: 'Tomáš Novák',
        city: 'Prague',
        experience: 'City Walk',
        date: '2025-05-15',
        amount: 30,
        status: 'completed'
      }
    ],
    messageHistory: [
      {
        id: 'MSG-001',
        with: 'Zoltán Kovács',
        lastMessage: 'Perfect! See you at 2 PM at the meeting point.',
        timestamp: '2025-07-08 14:30',
        unread: false,
        bookingId: 'BK-1001'
      },
      {
        id: 'MSG-002',
        with: 'Maria García',
        lastMessage: 'Thank you for the amazing food tour! ⭐⭐⭐⭐⭐',
        timestamp: '2025-06-21 19:45',
        unread: false,
        bookingId: 'BK-0987'
      }
    ],
    activityLog: [
      { action: 'Profile updated', timestamp: '2025-07-08 10:15' },
      { action: 'New booking created', timestamp: '2025-07-05 16:22' },
      { action: 'Message sent', timestamp: '2025-07-04 14:30' },
      { action: 'Profile viewed', timestamp: '2025-07-02 09:45' }
    ]
  },
  'U-002': {
    id: 'U-002',
    name: 'Zoltán Kovács',
    email: 'zoltan@email.com',
    phone: '+36 30 123 4567',
    type: 'buddy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    joinedDate: '2024-11-20',
    status: 'active',
    city: 'Budapest',
    country: 'Hungary',
    totalBookings: 34,
    totalEarnings: 1200,
    rating: 4.8,
    lastActivity: '2025-07-09',
    bio: 'Born and raised in Budapest. I love showing visitors the hidden gems of my beautiful city!',
    verifications: ['email', 'phone', 'id', 'background_check'],
    languages: ['Hungarian', 'English', 'German'],
    experiences: ['Mystery Local', 'Food Experience', 'Night Life', 'Cultural Tour'],
    bookingHistory: [
      {
        id: 'BK-1001',
        traveler: 'Sarah Johnson',
        city: 'Budapest',
        experience: 'Mystery Local',
        date: '2025-07-15',
        amount: 35,
        status: 'confirmed',
        commission: 7
      },
      {
        id: 'BK-0999',
        traveler: 'Mike Chen',
        city: 'Budapest',
        experience: 'Food Experience',
        date: '2025-07-10',
        amount: 55,
        status: 'completed',
        commission: 11
      }
    ],
    messageHistory: [
      {
        id: 'MSG-001',
        with: 'Sarah Johnson',
        lastMessage: 'Perfect! See you at 2 PM at the meeting point.',
        timestamp: '2025-07-08 14:30',
        unread: false,
        bookingId: 'BK-1001'
      },
      {
        id: 'MSG-003',
        with: 'Mike Chen',
        lastMessage: 'Thanks for the great experience! Highly recommend.',
        timestamp: '2025-07-11 20:15',
        unread: false,
        bookingId: 'BK-0999'
      }
    ],
    reviews: [
      {
        id: 'REV-001',
        reviewer: 'Sarah Johnson',
        rating: 5,
        comment: 'Amazing local experience! Zoltán showed me places I never would have found.',
        date: '2025-07-06'
      },
      {
        id: 'REV-002',
        reviewer: 'Mike Chen',
        rating: 5,
        comment: 'Best food tour ever! Really authentic Hungarian cuisine.',
        date: '2025-07-11'
      }
    ],
    activityLog: [
      { action: 'New booking confirmed', timestamp: '2025-07-08 16:20' },
      { action: 'Message replied', timestamp: '2025-07-08 14:30' },
      { action: 'Profile updated', timestamp: '2025-07-05 11:15' },
      { action: 'Experience completed', timestamp: '2025-07-10 18:00' }
    ]
  }
}

export default function UserDetailPage() {
  const params = useParams()
  const router = useRouter()
  const userId = params.id as string
  
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'messages' | 'activity'>('profile')
  
  const user = mockUserData[userId]
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">User Not Found</h1>
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  const handleSuspendUser = () => {
    alert(`User ${user.name} suspended!`)
  }

  const handleApproveUser = () => {
    alert(`User ${user.name} approved!`)
  }

  const handleSendMessage = () => {
    alert(`Opening message composer for ${user.name}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'suspended': return 'bg-red-100 text-red-800'
      case 'pending_review': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getBookingStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.back()}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Users
              </Button>
              <h1 className="text-xl font-bold text-gray-900">User Details</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={handleSendMessage}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              {user.status === 'active' ? (
                <Button variant="outline" size="sm" onClick={handleSuspendUser}>
                  <Ban className="w-4 h-4 mr-2" />
                  Suspend
                </Button>
              ) : (
                <Button variant="gradient" size="sm" onClick={handleApproveUser}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Activate
                </Button>
              )}
              <Button variant="outline" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-20 h-20 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.type === 'buddy' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.type === 'buddy' ? 'Buddy' : 'Traveler'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(user.status)}`}>
                    {user.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {user.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    {user.phone}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {user.city}, {user.country}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="text-right">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{user.totalBookings}</p>
                  <p className="text-sm text-gray-500">Total Bookings</p>
                </div>
                {user.type === 'buddy' ? (
                  <>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">${user.totalEarnings}</p>
                      <p className="text-sm text-gray-500">Total Earnings</p>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center justify-end">
                        <Star className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="text-xl font-bold text-gray-900">{user.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">rating</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <p className="text-2xl font-bold text-gray-900">${user.totalSpent}</p>
                    <p className="text-sm text-gray-500">Total Spent</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'profile', label: 'Profile Info' },
              { id: 'bookings', label: 'Booking History' },
              { id: 'messages', label: 'Message History' },
              { id: 'activity', label: 'Activity Log' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2 font-medium text-sm rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Bio</label>
                  <p className="text-gray-900">{user.bio}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Languages</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {user.languages.map((lang: string) => (
                      <span key={lang} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Member Since</label>
                  <p className="text-gray-900">{new Date(user.joinedDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Last Activity</label>
                  <p className="text-gray-900">{new Date(user.lastActivity).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Verifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Verifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['email', 'phone', 'id', 'background_check'].map(verification => (
                    <div key={verification} className="flex items-center space-x-2">
                      {user.verifications.includes(verification) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-sm text-gray-700 capitalize">
                        {verification.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buddy-specific info */}
              {user.type === 'buddy' && user.experiences && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Experiences Offered</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.experiences.map((exp: string) => (
                      <span key={exp} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews for buddies */}
              {user.type === 'buddy' && user.reviews && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reviews</h3>
                  <div className="space-y-4">
                    {user.reviews.slice(0, 2).map((review: any) => (
                      <div key={review.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{review.reviewer}</span>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{review.comment}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Booking History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {user.type === 'buddy' ? 'Traveler' : 'Buddy'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {user.bookingHistory.map((booking: any) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.type === 'buddy' ? booking.traveler : booking.buddy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {booking.experience}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(booking.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        ${booking.amount}
                        {booking.commission && (
                          <span className="text-green-600 ml-2">(+${booking.commission})</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBookingStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Message History</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {user.messageHistory.map((message: any) => (
                  <div key={message.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-900">
                          Conversation with {message.with}
                        </span>
                        {message.bookingId && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {message.bookingId}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(message.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{message.lastMessage}</p>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Conversation
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {user.activityLog.map((activity: any, index: number) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(activity.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}