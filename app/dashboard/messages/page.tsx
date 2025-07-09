'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  User, Calendar, MessageCircle, Star, CreditCard, Settings,
  LogOut, Menu, X, Home, MapPin, Users, HelpCircle, Bell
} from 'lucide-react'
import { Button } from '../../../components/ui/button'
import DashboardLayout from '../../../components/DashboardLayout'
import ChatWindow from '../../../components/ChatWindow'

export default function Page() {
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Anna',
      lastMessage: 'Szia, mikor találkozunk?',
      timestamp: new Date(),
      unread: 2
    },
    {
      id: 2,
      name: 'David',
      lastMessage: 'Holnap ráérek.',
      timestamp: new Date(),
      unread: 0
    }
  ])

  const handleSelectConversation = (conversation: any) => {
    setSelectedConversation(conversation)
  }

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
                <h2 className="text-lg font-semibold">Üzenetek</h2>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Új üzenet
                </Button>
              </div>
              <input
                type="text"
                placeholder="Keresés..."
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>
            {/* Conversation Items */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedConversation?.id === conv.id ? 'bg-gray-100' : ''
                  }`}
                  onClick={() => handleSelectConversation(conv)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{conv.name}</span>
                    <span className="text-xs text-gray-500">
                      {formatTime(conv.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{conv.lastMessage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1">
            {selectedConversation ? (
              <ChatWindow conversation={selectedConversation} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Válassz egy beszélgetést
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
