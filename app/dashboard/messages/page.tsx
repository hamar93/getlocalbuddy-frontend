'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import ChatWindow from '@/components/ChatWindow'
import { Search, Plus, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DashboardLayout from '@/components/DashboardLayout'
// Mock data for chat conversations
const mockConversations = [
  {
    id: '1',
    otherUser: {
      id: 'buddy-1',
      name: 'Zoltán',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      isOnline: true
    },
    lastMessage: {
      content: 'Perfect! I\'ll be there. Thanks for the details!',
      timestamp: new Date('2025-07-08T11:05:00'),
      isOwn: true
    },
    unreadCount: 0,
    bookingInfo: {
      id: 'booking-1',
      experience: 'Mystery Local',
      date: 'July 15, 2025',
      time: '2:00 PM',
      status: 'confirmed'
    }
  },
  {
    id: '2',
    otherUser: {
      id: 'buddy-2',
      name: 'Maria',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      isOnline: false,
      lastSeen: new Date('2025-07-07T15:30:00')
    },
    lastMessage: {
      content: 'Looking forward to cooking some authentic paella with you! 🥘',
      timestamp: new Date('2025-07-07T15:30:00'),
      isOwn: false
    },
    unreadCount: 2,
    bookingInfo: {
      id: 'booking-2',
      experience: 'Home Experience',
      date: 'July 22, 2025',
      time: '6:00 PM',
      status: 'confirmed'
    }
  },
  {
    id: '3',
    otherUser: {
      id: 'buddy-3',
      name: 'Tomáš',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      isOnline: false,
      lastSeen: new Date('2025-07-06T12:00:00')
    },
    lastMessage: {
      content: 'Thanks for the amazing review! Hope to see you again in Prague 🇨🇿',
      timestamp: new Date('2025-07-06T12:00:00'),
      isOwn: false
    },
    unreadCount: 0,
    bookingInfo: {
      id: 'booking-3',
      experience: 'City Tour',
      date: 'July 5, 2025',
      time: '10:00 AM',
      status: 'completed'
    }
  },
  {
    id: '4',
    otherUser: {
      id: 'buddy-4',
      name: 'Sophie',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      isOnline: true
    },
    lastMessage: {
      content: 'The cycling tour through Amsterdam was incredible! Thanks again 🚴‍♀️',
      timestamp: new Date('2025-07-04T16:45:00'),
      isOwn: true
    },
    unreadCount: 0,
    bookingInfo: {
      id: 'booking-4',
      experience: 'City Tour',
      date: 'July 3, 2025',
      time: '9:00 AM',
      status: 'completed'
    }
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(mockConversations[0]?.id || null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredConversations = mockConversations.filter(conv =>
    conv.otherUser.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedConv = mockConversations.find(conv => conv.id === selectedConversation)

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

  return (
    <DashboardLayout userType="traveler" currentPage="messages">
      <div className="h-[calc(100vh-8rem)] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
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
                            {conversation.lastMessage.isOwn ? 'You: ' : ''}
                            {conversation.lastMessage.content}
                          </p>
                          
                          {/* Booking info */}
                          <div className="flex items-center mt-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              conversation.bookingInfo.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                              conversation.bookingInfo.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              conversation.bookingInfo.status === 'completed' ? 'bg-gray-100 text-gray-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {conversation.bookingInfo.experience}
                            </span>
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
                currentUserId="current-user"
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
                  <p className="text-gray-600">Choose a conversation from the list to start chatting</p>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
