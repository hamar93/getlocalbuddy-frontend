'use client'

import React, { useState } from 'react'
import { Search, Plus, ArrowLeft, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const mockConversations = [
  {
    id: '1',
    name: 'Zoltán',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    isOnline: true,
    lastMessage: 'Perfect! I\'ll be there. Thanks for the details!',
    unreadCount: 0,
    experience: 'Mystery Local'
  },
  {
    id: '2',
    name: 'Maria',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    isOnline: false,
    lastMessage: 'Looking forward to cooking some authentic paella with you! 🥘',
    unreadCount: 2,
    experience: 'Home Experience'
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState('1')
  const [searchQuery, setSearchQuery] = useState('')
  const [newMessage, setNewMessage] = useState('')

  const selectedConv = mockConversations.find(conv => conv.id === selectedConversation)

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
            <h1 className="text-2xl font-bold text-gray-900">Traveler Messages</h1>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Traveler Dashboard
          </span>
        </div>
      </div>

      <div className="h-[calc(100vh-8rem)] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
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

            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-gray-100">
                {mockConversations.map(conversation => (
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
                          <h3 className="font-medium truncate text-gray-900">
                            {conversation.name}
                          </h3>
                          {conversation.unreadCount > 0 && (
                            <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm truncate mt-1 text-gray-600">
                          {conversation.lastMessage}
                        </p>
                        
                        <div className="flex items-center mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                            {conversation.experience}
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
                  <div className="flex items-center space-x-3">
                    <img 
                      src={selectedConv.avatar} 
                      alt={selectedConv.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{selectedConv.name}</h3>
                      <p className="text-sm text-gray-500">{selectedConv.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <img src={selectedConv.avatar} alt={selectedConv.name} className="w-8 h-8 rounded-full" />
                      <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm text-gray-900">Hi! I'm excited about our upcoming experience. Can you tell me more about the meeting point?</p>
                        <span className="text-xs text-gray-500 mt-1 block">2:30 PM</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary-600 text-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm">Of course! We'll meet at the Fisherman's Bastion main entrance. It's easy to find and has great views!</p>
                        <span className="text-xs text-primary-100 mt-1 block">2:35 PM</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-primary-600 text-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm">{selectedConv.lastMessage}</p>
                        <span className="text-xs text-primary-100 mt-1 block">2:40 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
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
                  <p className="text-gray-600">Choose a conversation from the list to start chatting</p>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
