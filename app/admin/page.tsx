'use client'

import React, { useState } from 'react'
import { 
  Users, UserCheck, UserX, AlertTriangle, DollarSign, Calendar, 
  TrendingUp, MessageCircle, Shield, Eye, MoreVertical, Search, Filter 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mock admin data
const mockAdminData = {
  stats: {
    totalUsers: 2847,
    activeBuddies: 342,
    pendingBuddies: 23,
    totalBookings: 1256,
    totalRevenue: 45680,
    reportedIssues: 8
  },
  pendingBuddies: [
    {
      id: '1',
      name: 'Anna Schmidt',
      email: 'anna@email.com',
      city: 'Vienna',
      country: 'Austria',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      appliedDate: '2025-07-05',
      backgroundCheck: 'pending',
      documents: ['ID Verification', 'Address Proof'],
      languages: ['English', 'German', 'Hungarian']
    },
    {
      id: '2',
      name: 'Carlos Rodriguez',
      email: 'carlos@email.com',
      city: 'Barcelona',
      country: 'Spain',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      appliedDate: '2025-07-07',
      backgroundCheck: 'completed',
      documents: ['ID Verification', 'Address Proof', 'Criminal Record'],
      languages: ['English', 'Spanish', 'French']
    },
    {
      id: '3',
      name: 'Liu Wei',
      email: 'liu@email.com',
      city: 'Prague',
      country: 'Czech Republic',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      appliedDate: '2025-07-08',
      backgroundCheck: 'pending',
      documents: ['ID Verification'],
      languages: ['English', 'Czech', 'Mandarin']
    }
  ],
  reportedIssues: [
    {
      id: '1',
      type: 'safety_concern',
      reporter: 'Sarah Johnson',
      reported: 'Mike Thompson',
      description: 'Buddy was late and seemed unprepared for the experience',
      severity: 'medium',
      status: 'investigating',
      date: '2025-07-08'
    },
    {
      id: '2',
      type: 'payment_issue',
      reporter: 'Emma Wilson',
      reported: 'Platform',
      description: 'Double charged for booking #BK-1234',
      severity: 'high',
      status: 'resolved',
      date: '2025-07-07'
    },
    {
      id: '3',
      type: 'inappropriate_behavior',
      reporter: 'James Miller',
      reported: 'Lisa Chen',
      description: 'Buddy made inappropriate comments during city tour',
      severity: 'high',
      status: 'pending_review',
      date: '2025-07-06'
    }
  ],
  recentBookings: [
    {
      id: 'BK-1001',
      traveler: 'Sarah Johnson',
      buddy: 'Zoltán Kovács',
      city: 'Budapest',
      experience: 'Mystery Local',
      date: '2025-07-15',
      amount: 35,
      status: 'confirmed',
      commission: 7
    },
    {
      id: 'BK-1002',
      traveler: 'Mike Chen',
      buddy: 'Maria García',
      city: 'Barcelona',
      experience: 'Home Experience',
      date: '2025-07-12',
      amount: 55,
      status: 'completed',
      commission: 11
    },
    {
      id: 'BK-1003',
      traveler: 'Emma Wilson',
      buddy: 'Tomáš Novák',
      city: 'Prague',
      experience: 'City Tour',
      date: '2025-07-10',
      amount: 88,
      status: 'completed',
      commission: 18
    }
  ]
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'buddies' | 'reports' | 'bookings'>('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const handleApproveBuddy = (buddyId: string) => {
    alert(`Buddy ${buddyId} approved!`)
  }

  const handleRejectBuddy = (buddyId: string) => {
    alert(`Buddy ${buddyId} rejected!`)
  }

  const handleResolveIssue = (issueId: string) => {
    alert(`Issue ${issueId} marked as resolved!`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': case 'resolved': return 'bg-green-100 text-green-800'
      case 'confirmed': case 'investigating': return 'bg-blue-100 text-blue-800'
      case 'pending': case 'pending_review': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">GetLocalBuddy Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Support Chat
              </Button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'buddies', label: 'Buddy Applications', icon: UserCheck },
              { id: 'reports', label: 'Reported Issues', icon: AlertTriangle },
              { id: 'bookings', label: 'Recent Bookings', icon: Calendar }
            ].map(tab => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-3 py-2 font-medium text-sm rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{mockAdminData.stats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Buddies</p>
                    <p className="text-2xl font-bold text-gray-900">{mockAdminData.stats.activeBuddies}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <UserX className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending Approval</p>
                    <p className="text-2xl font-bold text-gray-900">{mockAdminData.stats.pendingBuddies}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{mockAdminData.stats.totalBookings.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">${mockAdminData.stats.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Open Issues</p>
                    <p className="text-2xl font-bold text-gray-900">{mockAdminData.stats.reportedIssues}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Buddy Applications</h3>
                <div className="space-y-4">
                  {mockAdminData.pendingBuddies.slice(0, 3).map(buddy => (
                    <div key={buddy.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={buddy.avatar} alt={buddy.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-medium text-gray-900">{buddy.name}</p>
                          <p className="text-sm text-gray-500">{buddy.city}, {buddy.country}</p>
                        </div>
                      </div>
                      <Button variant="gradient" size="sm">Review</Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Issues</h3>
                <div className="space-y-4">
                  {mockAdminData.reportedIssues.slice(0, 3).map(issue => (
                    <div key={issue.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{issue.type.replace('_', ' ')}</p>
                        <p className="text-sm text-gray-500">Reported by {issue.reporter}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                          {issue.severity}
                        </span>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Buddy Applications Tab */}
        {activeTab === 'buddies' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Pending Buddy Applications</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Background Check</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockAdminData.pendingBuddies.map(buddy => (
                      <tr key={buddy.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={buddy.avatar} alt={buddy.name} className="w-10 h-10 rounded-full" />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{buddy.name}</div>
                              <div className="text-sm text-gray-500">{buddy.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {buddy.city}, {buddy.country}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(buddy.appliedDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(buddy.backgroundCheck)}`}>
                            {buddy.backgroundCheck}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {buddy.documents.length} uploaded
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <Button variant="gradient" size="sm" onClick={() => handleApproveBuddy(buddy.id)}>
                            Approve
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleRejectBuddy(buddy.id)}>
                            Reject
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Reported Issues Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Reported Issues</h2>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {mockAdminData.reportedIssues.map(issue => (
                <div key={issue.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-medium text-gray-900 capitalize">
                          {issue.type.replace('_', ' ')}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(issue.severity)}`}>
                          {issue.severity}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                          {issue.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{issue.description}</p>
                      <div className="text-sm text-gray-500">
                        <p>Reporter: {issue.reporter}</p>
                        <p>Reported User: {issue.reported}</p>
                        <p>Date: {new Date(issue.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="gradient" size="sm" onClick={() => handleResolveIssue(issue.id)}>
                        Resolve
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traveler</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buddy</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockAdminData.recentBookings.map(booking => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.traveler}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.buddy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.experience}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(booking.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          ${booking.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                          ${booking.commission}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
