'use client'

import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Calendar, MapPin, Star, Clock, MessageCircle, CreditCard, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data - in real app this would come from API
const mockData = {
  stats: {
    totalBookings: 12,
    upcomingBookings: 2,
    citiesVisited: 5,
    totalSpent: 890
  },
  upcomingBookings: [
    {
      id: '1',
      buddyName: 'Zoltán',
      buddyAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      city: 'Budapest',
      date: '2025-07-15',
      time: '10:00',
      experience: 'Mystery Local',
      price: 35,
      status: 'confirmed'
    },
    {
      id: '2',
      buddyName: 'Maria',
      buddyAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      city: 'Barcelona',
      date: '2025-07-22',
      time: '14:00',
      experience: 'Home Experience',
      price: 55,
      status: 'pending'
    }
  ],
  recentActivity: [
    {
      id: '1',
      type: 'booking_completed',
      title: 'Experience completed with Tomáš',
      description: 'Prague City Tour - 4 hours',
      date: '2025-07-08',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '2',
      type: 'review_left',
      title: 'Review submitted',
      description: 'You rated Lorenzo 5 stars',
      date: '2025-07-05',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: '3',
      type: 'message_received',
      title: 'New message from Sophie',
      description: 'Thanks for the great day in Amsterdam!',
      date: '2025-07-03',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ]
}

export default function TravelerDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'booking_completed': return <Calendar className="w-4 h-4" />
      case 'review_left': return <Star className="w-4 h-4" />
      case 'message_received': return <MessageCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <DashboardLayout userType="traveler" currentPage="dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="opacity-90">Ready for your next adventure? You have 2 upcoming experiences.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.totalBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.upcomingBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Cities Visited</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.citiesVisited}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">${mockData.stats.totalSpent}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Bookings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Experiences</h2>
                <Link href="/dashboard/bookings">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </div>
            <div className="p-6">
              {mockData.upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {mockData.upcomingBookings.map(booking => (
                    <div key={booking.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src={booking.buddyAvatar} 
                        alt={booking.buddyName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{booking.experience}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">with {booking.buddyName} in {booking.city}</p>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                          <span>{new Date(booking.date).toLocaleDateString()}</span>
                          <span>{booking.time}</span>
                          <span>${booking.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming bookings</h3>
                  <p className="text-gray-600 mb-4">Start planning your next adventure!</p>
                  <Link href="/find-buddy">
                    <Button variant="gradient">Find a Buddy</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockData.recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                    {activity.avatar && (
                      <img 
                        src={activity.avatar} 
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/find-buddy">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                <Users className="w-8 h-8 text-primary-600 mb-2" />
                <h3 className="font-medium text-gray-900">Find a Buddy</h3>
                <p className="text-sm text-gray-600">Discover local experiences in your next destination</p>
              </div>
            </Link>
            <Link href="/dashboard/messages">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                <MessageCircle className="w-8 h-8 text-primary-600 mb-2" />
                <h3 className="font-medium text-gray-900">Messages</h3>
                <p className="text-sm text-gray-600">Chat with your buddies</p>
              </div>
            </Link>
            <Link href="/dashboard/settings">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                <CreditCard className="w-8 h-8 text-primary-600 mb-2" />
                <h3 className="font-medium text-gray-900">Payment Methods</h3>
                <p className="text-sm text-gray-600">Manage your cards and billing</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
