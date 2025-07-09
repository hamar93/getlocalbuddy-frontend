'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BuddyMessagesPage() {
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
            <h1 className="text-2xl font-bold text-gray-900">Buddy Messages</h1>
          </div>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            Buddy Dashboard
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Traveler Messages Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            Your chat interface for managing traveler communications will be available here. Connect with travelers interested in your local experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">👥 Traveler Management</h3>
              <p className="text-sm text-gray-600">Organize conversations by booking</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">💰 Booking Requests</h3>
              <p className="text-sm text-gray-600">Accept or decline experience requests</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">📋 Experience Details</h3>
              <p className="text-sm text-gray-600">Share meeting points and schedules</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">⚡ Quick Responses</h3>
              <p className="text-sm text-gray-600">Pre-written responses for common questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
