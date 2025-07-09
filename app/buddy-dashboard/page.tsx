'use client'

import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Calendar, DollarSign, Star, Users, TrendingUp, Clock, MessageCircle, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data - in real app this would come from API
const mockData = {
  stats: {
    totalBookings: 47,
    thisMonthBookings: 8,
    totalEarnings: 2840,
    avgRating: 4.9,
    responseTime: 12,
    profileViews: 156
  },
  upcomingBookings: [
    {
      id: '1',
      travelerName: 'Sarah Johnson',
      travelerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      experience: 'Home Experience',
      date: '2025-07-12',
      time: '18:00',
      duration: '3 hours',
      price: 55,
      status: 'confirmed'
    },
    {
      id: '2',
      travelerName: 'Mike Chen',
      travelerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      experience: 'City Tour',
      date: '2025-07-15',
      time: '10:00',
      duration: '4 hours',
      price: 100,
      status: 'pending'
    },
    {
      id: '3',
      travelerName: 'Emma Wilson',
      travelerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      experience: 'Mystery Local',
      date: '2025-07-18',
      time: '14:00',
      duration: '4 hours',
      price: 35,
      status: 'confirmed'
    }
  ],
  recentActivity: [
    {
      id: '1',
      type: 'new_booking',
      title: 'New booking request',
      description: 'Mike Chen wants to book a City Tour',
      date: '2025-07-09',
      action: 'Respond'
    },
    {
      id: '2',
      type: 'review_received',
      title: 'New 5-star review',
      description: 'Sarah left you an amazing review!',
      date: '2025-07-08',
      action: 'View'
    },
    {
      id: '3',
      type: 'payout_received',
      title: 'Payout received',
      description: '$180 has been sent to your account',
      date: '2025-07-05',
      action: 'Details'
    }
  ],
  monthlyStats: [
    { month: 'Jan', bookings: 6, earnings: 420 },
    { month: 'Feb', bookings: 8, earnings: 560 },
    { month: 'Mar', bookings: 5, earnings: 350 },
    { month: 'Apr', bookings: 9, earnings: 630 },
    { month: 'May', bookings: 7, earnings: 490 },
    { month: 'Jun', bookings: 12, earnings: 840 }
  ]
}

export default function BuddyDashboard() {
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
      case 'new_booking': return <Calendar className="w-4 h-4" />
      case 'review_received': return <Star className="w-4 h-4" />
      case 'payout_received': return <DollarSign className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <DashboardLayout userType="buddy" currentPage="dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Zoltán!</h1>
          <p className="opacity-90">You have 3 upcoming experiences this week. Keep up the great work!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font'use client'

import React from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { Calendar, DollarSign, Star, Users, TrendingUp, Clock, MessageCircle, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data - in real app this would come from API
const mockData = {
  stats: {
    totalBookings: 47,
    thisMonthBookings: 8,
    totalEarnings: 2840,
    avgRating: 4.9,
    responseTime: 12,
    profileViews: 156
  },
  upcomingBookings: [
    {
      id: '1',
      travelerName: 'Sarah Johnson',
      travelerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      experience: 'Home Experience',
      date: '2025-07-12',
      time: '18:00',
      duration: '3 hours',
      price: 55,
      status: 'confirmed'
    },
    {
      id: '2',
      travelerName: 'Mike Chen',
      travelerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      experience: 'City Tour',
      date: '2025-07-15',
      time: '10:00',
      duration: '4 hours',
      price: 100,
      status: 'pending'
    },
    {
      id: '3',
      travelerName: 'Emma Wilson',
      travelerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      experience: 'Mystery Local',
      date: '2025-07-18',
      time: '14:00',
      duration: '4 hours',
      price: 35,
      status: 'confirmed'
    }
  ],
  recentActivity: [
    {
      id: '1',
      type: 'new_booking',
      title: 'New booking request',
      description: 'Mike Chen wants to book a City Tour',
      date: '2025-07-09',
      action: 'Respond'
    },
    {
      id: '2',
      type: 'review_received',
      title: 'New 5-star review',
      description: 'Sarah left you an amazing review!',
      date: '2025-07-08',
      action: 'View'
    },
    {
      id: '3',
      type: 'payout_received',
      title: 'Payout received',
      description: '$180 has been sent to your account',
      date: '2025-07-05',
      action: 'Details'
    }
  ],
  monthlyStats: [
    { month: 'Jan', bookings: 6, earnings: 420 },
    { month: 'Feb', bookings: 8, earnings: 560 },
    { month: 'Mar', bookings: 5, earnings: 350 },
    { month: 'Apr', bookings: 9, earnings: 630 },
    { month: 'May', bookings: 7, earnings: 490 },
    { month: 'Jun', bookings: 12, earnings: 840 }
  ]
}

export default function BuddyDashboard() {
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
      case 'new_booking': return <Calendar className="w-4 h-4" />
      case 'review_received': return <Star className="w-4 h-4" />
      case 'payout_received': return <DollarSign className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  return (
    <DashboardLayout userType="buddy" currentPage="dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Zoltán!</h1>
          <p className="opacity-90">You have 3 upcoming experiences this week. Keep up the great work!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
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
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.thisMonthBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${mockData.stats.totalEarnings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.avgRating}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Response Time</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.responseTime}min</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">{mockData.stats.profileViews}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Bookings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Bookings</h2>
                <Link href="/buddy-dashboard/bookings">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockData.upcomingBookings.map(booking => (
                  <div key={booking.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={booking.travelerAvatar} 
                      alt={booking.travelerName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{booking.experience}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">with {booking.travelerName}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <span>{new Date(booking.date).toLocaleDateString()}</span>
                        <span>{booking.time}</span>
                        <span>{booking.duration}</span>
                        <span className="font-medium text-green-600">${booking.price}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      {booking.status === 'pending' && (
                        <Button variant="gradient" size="sm">Accept</Button>
                      )}
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
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
                    <Button variant="outline" size="sm">
                      {activity.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Performance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Performance</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded mr-2"></div>
                  <span>Bookings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                  <span>Earnings ($)</span>
                </div>
              </div>
            </div>
            {/* Simple bar chart representation */}
            <div className="space-y-3">
              {mockData.monthlyStats.slice(-6).map((stat, index) => (
                <div key={stat.month} className="flex items-center space-x-4">
                  <div className="w-8 text-sm text-gray-600">{stat.month}</div>
                  <div className="flex-1 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${(stat.bookings / 12) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{stat.bookings}</span>
                  </div>
                  <div className="flex-1 flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(stat.earnings / 840) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">${stat.earnings}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <Link href="/buddy-dashboard/calendar">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <Calendar className="w-8 h-8 text-primary-600 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Update Availability</h3>
                      <p className="text-sm text-gray-600">Manage your calendar and available times</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/buddy-dashboard/settings">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <Users className="w-8 h-8 text-primary-600 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Edit Profile</h3>
                      <p className="text-sm text-gray-600">Update your bio, photos, and experiences</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/buddy-dashboard/payouts">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-primary-600 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Payout Settings</h3>
                      <p className="text-sm text-gray-600">Manage payment methods and earnings</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Tips & Insights */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6 border border-primary-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips to Boost Your Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">Respond to messages within 1 hour to increase bookings by 40%</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Profile Photos</h3>
              <p className="text-sm text-gray-600">Add 3+ high-quality photos to your profile for better visibility</p>
            </div>
            <div className="bg-white/50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Mystery Experiences</h3>
              <p className="text-sm text-gray-600">Mystery Local bookings get 60% more engagement than regular tours</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
