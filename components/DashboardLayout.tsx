'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  User, Calendar, MessageCircle, Star, CreditCard, Settings, 
  LogOut, Menu, X, Home, MapPin, Users, HelpCircle, Bell
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: 'traveler' | 'buddy'
  currentPage: string
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType, currentPage }) => {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Mock user data - in real app this would come from auth context
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    verified: true,
    city: 'Budapest',
    memberSince: '2024'
  }

  const travelerNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/dashboard' },
    { id: 'bookings', label: 'My Bookings', icon: Calendar, href: '/dashboard/bookings' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, href: '/dashboard/messages' },
    { id: 'reviews', label: 'My Reviews', icon: Star, href: '/dashboard/reviews' },
    { id: 'billing', label: 'Billing', icon: CreditCard, href: '/dashboard/billing' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/dashboard/settings' }
  ]

  const buddyNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/buddy-dashboard' },
    { id: 'calendar', label: 'Calendar', icon: Calendar, href: '/buddy-dashboard/calendar' },
    { id: 'bookings', label: 'Bookings', icon: Users, href: '/buddy-dashboard/bookings' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, href: '/buddy-dashboard/messages' },
    { id: 'city-page', label: 'My City Page', icon: MapPin, href: '/buddy-dashboard/city-page' },
    { id: 'reviews', label: 'Reviews', icon: Star, href: '/buddy-dashboard/reviews' },
    { id: 'payouts', label: 'Payouts', icon: CreditCard, href: '/buddy-dashboard/payouts' },
    { id: 'settings', label: 'Profile Settings', icon: Settings, href: '/buddy-dashboard/settings' }
  ]

  const navItems = userType === 'traveler' ? travelerNavItems : buddyNavItems

  const handleLogout = () => {
    // Mock logout - in real app clear auth state
    alert('Logging out...')
    router.push('/')
  }

  const isActive = (itemId: string) => currentPage === itemId

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link href="/" className="text-xl font-bold text-primary-600">
            GetLocalBuddy
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={mockUser.avatar} 
                alt={mockUser.name}
                className="w-12 h-12 rounded-full"
              />
              {mockUser.verified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{mockUser.name}</h3>
              <p className="text-sm text-gray-500">
                {userType === 'buddy' ? `Buddy in ${mockUser.city}` : 'Traveler'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                      ${isActive(item.id)
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 px-6">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">
              {userType === 'buddy' ? 'Boost Your Profile' : 'Plan Your Trip'}
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              {userType === 'buddy' 
                ? 'Add photos and experiences to get more bookings'
                : 'Discover amazing local experiences in your next destination'
              }
            </p>
            <Button variant="gradient" size="sm" className="w-full">
              {userType === 'buddy' ? 'Update Profile' : 'Find Buddies'}
            </Button>
          </div>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900 capitalize">
              {currentPage.replace('-', ' ')}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Help */}
            <Link href="/help" className="text-gray-500 hover:text-gray-700">
              <HelpCircle className="w-6 h-6" />
            </Link>

            {/* User Menu */}
            <div className="relative">
              <img 
                src={mockUser.avatar} 
                alt={mockUser.name}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
