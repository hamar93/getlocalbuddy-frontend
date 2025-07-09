'use client'

import React, { useState } from 'react'
import { Search, Plus, ArrowLeft, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const mockBuddyConversations = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    isOnline: true,
    nationality: '🇺🇸 USA',
    lastMessage: 'Perfect! I\'ll be there. Thanks for the details!',
    unreadCount: 0,
    experience: 'Mystery Local',
    amount: 35,
    status: 'confirmed'
  },
  {
    id: '2',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    isOnline: false,
    nationality: '🇬🇧 UK',
    lastMessage: 'Could we meet a bit earlier? Maybe around 5:30 PM?',
    unreadCount: 1,
    experience: 'Food Experience',
    amount: 55,
    status: 'confirmed'
  },
  {
    id: '3',
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    isOnline: false,
    nationality: '🇨🇦 Canada',
    lastMessage: 'Thanks for the great experience! Highly recommend 👍',
    unreadCount: 0,
    experience: 'Night Life',
    amount: 45,
    status: 'completed'
  }
]

export default function BuddyMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState('1')
  const [searchQuery, setSearchQuery] = useState('')
  const [newMessage, setNewMessage] = useState('')

  const selectedConv = mockBuddyConversations.find(conv => conv.id === selectedConversation)

  const totalUnread = mockBuddyConversations.reduce((sum, conv) => sum + conv.unreadCount, 0)
  const pendingBookings = mockBuddyConversations.filter(conv => conv.status === 'pending').length
  const confirmedBookings = mockBuddyConversations.filter(conv => conv.status === 'confirmed').length

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
              <p className="text-2xl font-bold text-gray-900">{totalUnread}</p>
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
              <p className="text-2xl font-bold text-yellow-600">{pendingBookings}</p>
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
              <p className="text-2xl font-bold text-green-600">{confirmedBookings}</p>
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
              <p className="text-2xl font-bold text-purple-600">{mockBuddyConversations.length}</p>
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
                {mockBuddyConversations.map(conversation => (
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
                          src={conversation.avatar} 
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {conversation.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium truncate text-gray-900">
                              {conversation.name}
                            </h3>
                            <span className="text-xs text-gray-500">{conversation.nationality}</span>
                          </div>
                          {conversation.unreadCount > 0 && (
                            <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm truncate mt-1 text-gray-600">
                          {conversation.lastMessage}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                            {conversation.experience}
                          </span>
                          <span className="text-xs text-gray-600 font-medium">
                            ${conversation.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Simple Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConv ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={selectedConv.avatar} 
                        alt={selectedConv.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{selectedConv.name} {selectedConv.nationality}</h3>
                        <p className="text-sm text-gray-500">{selectedConv.experience} • ${selectedConv.amount}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedConv.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      selectedConv.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {selectedConv.status}
                    </span>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <img src={selectedConv.avatar} alt={selectedConv.name} className="w-8 h-8 rounded-full" />
                      <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-900">Hi! I'm interested in your {selectedConv.experience.toLowerCase()}. Are you available on the 15th?</p>
                        <span className="text-xs text-gray-500 mt-1 block">Yesterday 2:30 PM</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary-600 text-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm">Hi {selectedConv.name}! Yes, I'm available on the 15th. I'll send you all the details about our meeting point and what to expect!</p>
                        <span className="text-xs text-primary-100 mt-1 block">Yesterday 2:35 PM</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <img src={selectedConv.avatar} alt={selectedConv.name} className="w-8 h-8 rounded-full" />
                      <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-900">{selectedConv.lastMessage}</p>
                        <span className="text-xs text-gray-500 mt-1 block">Today 2:40 PM</span>
                      </div>
                    </div>

                    {selectedConv.status === 'confirmed' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mx-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <p className="text-sm text-green-800 font-medium">Booking Confirmed</p>
                        </div>
                        <p className="text-xs text-green-600 mt-1">
                          Experience: {selectedConv.experience} • Amount: ${selectedConv.amount} • Date: July 15, 2025
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={`Message ${selectedConv.name}...`}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Button variant="gradient">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
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
