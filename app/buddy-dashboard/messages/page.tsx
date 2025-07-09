'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import ChatWindow from '@/components/ChatWindow'
import { Search, Plus, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DashboardLayout from '@/components/DashboardLayout'
// Mock data for buddy's conversations with travelers
const mockBuddyConversations = [
  {
    id: '1',
    otherUser: {
      id: 'traveler-1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      isOnline: true
    },
    lastMessage: {
      content: 'Can\'t wait for the home dinner experience tomorrow! Any special dietary requirements I should know about?',
      timestamp: new Date('2025-07-09T14:30:00'),
      isOwn: false
    },
    unreadCount: 1,
    bookingInfo: {
      id: 'booking-1',
      experience: 'Home Experience',
      date: 'July 12, 2025',
      time: '6:00 PM',
      status: 'confirmed'
    }
  },
  {
    id: '2',
    otherUser: {
      id: 'traveler-2',
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      isOnline: false,
      lastSeen: new Date('2025-07-08T20:15:00')
    },
    lastMessage: {
      content: 'Hi! I\'d love to book your City Tour for next week. Are you available on the 15th?',
      timestamp: new Date('2025-07-08T20:15:00'),
      isOwn: false
    },
    unreadCount: 2,
    bookingInfo: {
      id: 'booking-2',
      experience: 'City Tour',
      date: 'July 15, 2025',
      time: '10:00 AM',
      status: 'pending'
    }
  },
  {
    id: '3',
    otherUser: {
      id: 'traveler-3',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      isOnline: true
    },
    lastMessage: {
      content: 'Perfect! See you at 2 PM at the Chain Bridge. This mystery experience sounds so exciting! 🎭',
      timestamp: new Date('2025-07-08T16:45:00'),
      isOwn: false
    },
    unreadCount: 0,
    bookingInfo: {
      id: 'booking-3',
      experience: 'Mystery Local',
      date: 'July 18, 2025',
      time: '2:00 PM',
      status: 'confirmed'
    }
  },
  {
    id: '4',
    otherUser: {
      id: 'traveler-4',
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      isOnline: false,
      lastSeen: new Date('2025-07-07T11:30:00')
    },
    lastMessage: {
      content: 'Thank you so much for the amazing VIP Local Life experience! Budapest is incredible 🇭🇺',
      timestamp: new Date('2025-07-07T11:30:00'),
      isOwn: false
    },
    unreadCount: 0,
    bookingInfo: {
      id: 'booking-4',
      experience: 'VIP Local Life',
      date: 'July 6, 2025',
      time: '9:00 AM',
      status: 'completed'
    }
  }
]

export default function BuddyMessagesPage(){
  const [selectedConversation, setSelectedConversation] = useState<string | null>(mockBuddyConversations[0]?.id || null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all')

  const filteredConversations = mockBuddyConversations.filter(conv => {
    const matchesSearch = conv.otherUser.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || conv.bookingInfo.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const selectedConv = mockBuddyConversations.find(conv => conv.id === selectedConversation)

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'now'
    if (minutes < 60) return `${minutes}m`
    if (hours < 24) return `${hours}h`
    if (days < 7) return `${days}d`
    return date.toLocaleDateString()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'completed': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getUnreadCount = () => {
    return mockBuddyConversations.reduce((total, conv) => total + conv.unreadCount, 0)
  }

  const getPendingBookings = () => {
    return mockBuddyConversations.filter(conv => conv.bookingInfo.status === 'pending').length
  }

  return (
    <DashboardLayout userType="buddy" currentPage="messages">
      <div className="space-y-6">
        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">{getUnreadCount()}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{getPendingBookings()}</p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Chats</p>
                <p className="text-2xl font-bold text-gray-900">{mockBuddyConversations.length}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Filter className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="h-[calc(100vh-12rem)] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Guest Messages</h2>
                  <Button variant="ghost" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search guests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Bookings</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {filteredConversations.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredConversations.map(conversation => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(conversation.id)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedConversation === conversation.id ? 'bg-primary-50 border-r-2 border-primary-500' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative flex-shrink-0">
                            <img 
                              src={conversation.otherUser.avatar} 
                              alt={conversation.otherUser.name}
                              className="w-12 h-12 rounded-full"
                            />
                            {conversation.otherUser.isOnline && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className={`font-medium truncate ${
                                conversation.unreadCount > 0 ? 'text-gray-900' : 'text-gray-700'
                              }`}>
                                {conversation.otherUser.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-500">
                                  {formatTime(conversation.lastMessage.timestamp)}
                                </span>
                                {conversation.unreadCount > 0 && (
                                  <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {conversation.unreadCount}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <p className={`text-sm truncate mt-1 ${
                              conversation.unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-600'
                            }`}>
                              {conversation.lastMessage.content}
                            </p>
                            
                            {/* Booking info */}
                            <div className="flex items-center justify-between mt-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(conversation.bookingInfo.status)}`}>
                                {conversation.bookingInfo.experience}
                              </span>
                              {conversation.bookingInfo.status === 'pending' && (
                                <Button variant="gradient" size="sm" className="text-xs px-2 py-1 h-6">
                                  Respond
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>No conversations found</p>
                      <p className="text-sm mt-1">Try adjusting your search or filter</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
                           {selectedConv ? (
                <ChatWindow
                  chatId={selectedConv.id}
                  currentUserId="buddy-user"
                  otherUser={selectedConv.otherUser}
                  bookingInfo={selectedConv.bookingInfo}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                    <p className="text-gray-600">Choose a guest conversation to start chatting</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
