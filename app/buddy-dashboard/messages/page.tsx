'use client'

import React, { useState } from 'react'
import ChatWindow from '@/components/ChatWindow'
import { Search, Plus, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type BuddyConversation = {
  id: string
  traveler: {
    id: string
    name: string
    avatar: string
    isOnline: boolean
    nationality: string
  }
  lastMessage: {
    content: string
    timestamp: Date
    isOwn: boolean
  }
  unreadCount: number
  bookingInfo: {
    id: string
    experience: string
    date: string
    time: string
    status: string
    amount: number
  }
}

const mockBuddyConversations: BuddyConversation[] = [
  {
    id: '1',
    traveler: {
      id: 'traveler-1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
      isOnline: true,
      nationality: '🇺🇸 USA'
    },
    lastMessage: {
      content: 'Perfect! I\'ll be there. Thanks for the details!',
      timestamp: new Date('2025-07-08T11:05:00'),
      isOwn: false
    },
    unreadCount: 0,
    bookingInfo: {
      id: 'booking-1',
      experience: 'Mystery Local',
      date: 'July 15, 2025',
      time: '2:00 PM',
      status: 'confirmed',
      amount: 35
    }
  },
  {
    id: '2',
    traveler: {
      id: 'traveler-2',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      isOnline: false,
      nationality: '🇬🇧 UK'
    },
    lastMessage: {
      content: 'Could we meet a bit earlier? Maybe around 5:30 PM?',
      timestamp: new Date('2025-07-07T19:20:00'),
      isOwn: false
    },
    unreadCount: 1,
    bookingInfo: {
      id: 'booking-2',
      experience: 'Food Experience',
      date: 'July 12, 2025',
      time: '6:00 PM',
      status: 'confirmed',
      amount: 55
    }
  }
]

export default function BuddyMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>('1')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredConversations = mockBuddyConversations.filter(conv =>
    conv.traveler.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedConv = mockBuddyConversations.find(conv => conv.id === selectedConversation)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Buddy Messages</h1>
          </div>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            Buddy Dashboard
          </span>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Requests</p>
              <p className="text-2xl font-bold text-yellow-600">0</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Confirmed Bookings</p>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Travelers</p>
              <p className="text-2xl font-bold text-purple-600">2</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-16rem)] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Traveler Conversations</h2>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search travelers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
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
                          src={conversation.traveler.avatar} 
                          alt={conversation.traveler.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {conversation.traveler.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium truncate text-gray-900">
                              {conversation.traveler.name}
                            </h3>
                            <span className="text-xs text-gray-500">{conversation.traveler.nationality}</span>
                          </div>
                          {conversation.unreadCount > 0 && (
                            <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm truncate mt-1 text-gray-600">
                          {conversation.lastMessage.content}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                            {conversation.bookingInfo.experience}
                          </span>
                          <span className="text-xs text-gray-600 font-medium">
                            ${conversation.bookingInfo.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col">
            {selectedConv ? (
              <ChatWindow
                chatId={selectedConv.id}
                currentUserId="current-buddy"
                otherUser={{
                  id: selectedConv.traveler.id,
                  name: selectedConv.traveler.name,
                  avatar: selectedConv.traveler.avatar,
                  isOnline: selectedConv.traveler.isOnline
                }}
                bookingInfo={selectedConv.bookingInfo}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                  <p className="text-gray-600">Choose a traveler from the list to start chatting</p>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
