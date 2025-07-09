'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AuthForm from '@/components/AuthForm'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAuthSubmit = (data: any) => {
    // Mock authentication
    console.log('Auth data:', data)
    
    if (authMode === 'signup') {
      // Mock signup success - show verification message
      setShowSuccess(true)
    } else {
      // Mock login success
      alert('Login successful! Redirecting to dashboard...')
      router.push('/dashboard')
    }
  }

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login')
    setShowSuccess(false)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to LocalBuddy!
            </h1>
            <p className="text-gray-600 mb-6">
              We've sent a verification email to your inbox. Please check your email and click the verification link to activate your account.
            </p>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Back to Sign Up
              </button>
              <button
                onClick={() => setAuthMode('login')}
                className="w-full px-4 py-3 text-primary-600 hover:text-primary-700 transition-colors"
              >
                Already verified? Sign In
              </button>
            </div>

            {/* Help */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Didn't receive the email?{' '}
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Resend verification
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(20,184,166,0.3)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-100/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Main Auth Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                GetLocalBuddy
              </span>
            </Link>
          </div>

          {/* Benefits for Signup */}
          {authMode === 'signup' && (
            <div className="mb-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border border-primary-100">
              <h3 className="font-semibold text-gray-900 mb-2">Join thousands of travelers!</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Connect with verified local buddies</li>
                <li>• Get authentic, personalized experiences</li>
                <li>• Book mystery adventures and home dinners</li>
                <li>• Travel safely with background-checked hosts</li>
              </ul>
            </div>
          )}

          {/* Auth Form */}
          <AuthForm
            mode={authMode}
            onToggleMode={toggleAuthMode}
            onSubmit={handleAuthSubmit}
          />
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
            <Link href="/help" className="hover:text-gray-900 transition-colors">
              Help Center
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
