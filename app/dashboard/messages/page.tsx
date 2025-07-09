'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
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

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            Your chat interface will be available here. You'll be able to communicate with your local buddies about upcoming experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">🗨️ Real-time Chat</h3>
              <p className="text-sm text-gray-600">Instant messaging with your buddies</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">📅 Booking Integration</h3>
              <p className="text-sm text-gray-600">Chat linked to your bookings</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">📍 Location Sharing</h3>
              <p className="text-sm text-gray-600">Share meeting points easily</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">⭐ Experience Reviews</h3>
              <p className="text-sm text-gray-600">Rate and review your experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
