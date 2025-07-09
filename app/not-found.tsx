'use client'

import React from 'react'
import { Home, ArrowLeft, Map, Compass, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center animate-bounce">
              <Map className="w-12 h-12 text-primary-600" />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Looks like you're lost!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Don't worry, even the best explorers get lost sometimes.
          </p>
          <p className="text-gray-500">
            The page you're looking for doesn't exist or has been moved to a new adventure.
          </p>
        </div>

        {/* Travel-themed illustration */}
        <div className="flex justify-center items-center space-x-8 mb-8 text-gray-400">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
              <Compass className="w-8 h-8 text-yellow-600" />
            </div>
            <span className="text-sm">Lost your way?</span>
          </div>
          
          <div className="text-6xl">🗺️</div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <span className="text-sm">Need help?</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/">
            <Button variant="gradient" size="lg" className="w-full sm:w-auto">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => router.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">
            Or try one of these popular destinations:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/dashboard" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
              Traveler Dashboard
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/buddy-dashboard" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
              Buddy Dashboard
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
              Contact Support
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/faq" className="text-sm text-primary-600 hover:text-primary-700 hover:underline">
              Help Center
            </Link>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="mt-12 p-6 bg-white/50 rounded-2xl border border-white/20 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">🧭</span>
            <h3 className="font-semibold text-gray-900">Local Buddy Tip</h3>
          </div>
          <p className="text-sm text-gray-600">
            "When you're lost in a new city, the best way to find your path is to ask a local! 
            Our buddies are always ready to help you navigate both our platform and their cities."
          </p>
        </div>
      </div>
    </div>
  )
}
