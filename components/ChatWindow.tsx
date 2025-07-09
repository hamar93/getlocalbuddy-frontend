'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Image, MapPin, Calendar, Phone, Video, MoreVertical, Paperclip, Smile } from 'lucide-react'

interface Message {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: Date
  type: 'text' | 'image' | 'location' | 'booking'
  read: boolean
  attachments?: {
    type: 'image' | 'file'
    url: string
    name: string
  }[]
}

interface ChatWindowProps {
  chatId: string
  currentUserId: string
  otherUser: {
    id: string
    name: string
    avatar: string
    isOnline: boolean
    lastSeen?: Date
  }
  bookingInfo?: {
    id: string
    experience: string
    date: string
    time: string
    status: string
  }
  onClose?: () => void
}

const ChatWindow: React.FC<ChatWindowProps> = ({ 
  chatId, 
  currentUserId, 
  otherUser, 
  bookingInfo,
  onClose 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: otherUser.id,
      senderName: otherUser.name,
      content: 'Hey! Thanks for booking the Mystery Local experience. I\'m so excited to show you around Budapest! 🎭',
      timestamp: new Date('2025-07-08T10:30:00'),
      type: 'text',
      read: true
    },
    {
      id: '2',
      senderId: currentUserId,
      senderName: 'You',
      content: 'Hi! I\'m really looking forward to it too! Can you give me any hints about what we\'ll be doing? 😄',
      timestamp: new Date('2025-07-08T10:35:00'),
      type: 'text',
      read: true
    },
    {
      id: '3',
      senderId: otherUser.id,
      senderName: otherUser.name,
      content: 'Haha, nice try! But that would ruin the surprise 😉 I can tell you that you should bring your camera and maybe wear comfortable shoes for walking.',
      timestamp: new Date('2025-07-08T10:40:00'),
      type: 'text',
      read: true
    },
    {
      id: '4',
      senderId: otherUser.id,
      senderName: otherUser.name,
      content: 'Let\'s meet at this location at 2 PM tomorrow:',
      timestamp: new Date('2025-07-08T11:00:00'),
      type: 'location',
      read: true
    },
    {
      id: '5',
      senderId: currentUserId,
      senderName: 'You',
      content: 'Perfect! I\'ll be there. Thanks for the details!',
      timestamp: new Date('2025-07-08T11:05:00'),
      type: 'text',
      read: false
    }
  ])

  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Mock typing indicator
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (newMessage) {
      setIsTyping(true)
      timeout = setTimeout(() => setIsTyping(false), 1000)
    }
    return () => clearTimeout(timeout)
  }, [newMessage])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      senderId: currentUserId,
      senderName: 'You',
      content: newMessage,
      timestamp: new Date(),
      type: 'text',
      read: false
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')
    
    // Mock auto-reply (for demo purposes)
    setTimeout(() => {
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        senderId: otherUser.id,
        senderName: otherUser.name,
        content: 'Thanks for your message! I\'ll get back to you soon 😊',
        timestamp: new Date(),
        type: 'text',
        read: false
      }
      setMessages(prev => [...prev, autoReply])
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date: Date) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString()
    }
  }

  const renderMessage = (message: Message) => {
    const isOwn = message.senderId === currentUserId
    
    if (message.type === 'location') {
      return (
        <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
          <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
            isOwn ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-900'
          }`}>
            <p className="text-sm mb-2">{message.content}</p>
            <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="font-medium text-sm">Széchenyi Chain Bridge</p>
                <p className="text-xs opacity-75">Budapest, Hungary</p>
              </div>
            </div>
            <p className="text-xs opacity-75 mt-2">{formatTime(message.timestamp)}</p>
          </div>
        </div>
      )
    }

    return (
      <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
          isOwn 
            ? 'bg-primary-600 text-white' 
            : 'bg-gray-100 text-gray-900'
        }`}>
          <p className="text-sm">{message.content}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs opacity-75">{formatTime(message.timestamp)}</p>
            {isOwn && (
              <div className="flex space-x-1">
                <div className={`w-2 h-2 rounded-full ${message.read ? 'bg-blue-300' : 'bg-white/50'}`} />
                <div className={`w-2 h-2 rounded-full ${message.read ? 'bg-blue-300' : 'bg-white/50'}`} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img 
              src={otherUser.avatar} 
              alt={otherUser.name}
              className="w-10 h-10 rounded-full"
            />
            {otherUser.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{otherUser.name}</h3>
            <p className="text-sm text-gray-500">
              {otherUser.isOnline ? 'Online' : `Last seen ${otherUser.lastSeen?.toLocaleDateString()}`}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Booking Info Banner */}
      {bookingInfo && (
        <div className="p-4 bg-primary-50 border-b border-primary-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-primary-600" />
              <div>
                <p className="font-medium text-primary-900">{bookingInfo.experience}</p>
                <p className="text-sm text-primary-700">
                  {bookingInfo.date} at {bookingInfo.time}
                </p>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              bookingInfo.status === 'confirmed' ? 'bg-green-100 text-green-800' :
              bookingInfo.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {bookingInfo.status}
            </span>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Date separator */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-100 rounded-full px-3 py-1">
            <span className="text-xs text-gray-600">{formatDate(new Date())}</span>
          </div>
        </div>

        {messages.map(message => renderMessage(message))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-3 max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <Paperclip className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Image className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Button 
              variant="ghost" 
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2"
            >
              <Smile className="w-4 h-4" />
            </Button>
          </div>

          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            variant="gradient"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
}

export default ChatWindow
