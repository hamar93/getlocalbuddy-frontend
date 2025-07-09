'use client'

import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import ChatWindow from '@/components/ChatWindow'
import { Search, Plus, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

export default function BuddyMessagesPage()
