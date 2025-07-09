'use client'

import React from 'react'
import { MessageCircle, Calendar, User, Settings, Bell, Search, Menu, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: 'traveler' | 'buddy'
  currentPage: string
}

export default function DashboardLayout({ children, userType, currentPage }: DashboardLayoutProps) {
  const travelerNavItems = [
    { id: 'messages', label: 'Messages', icon: MessageCircle, href: '/dashboard/messages' },
    { id: 'bookings', label: 'My Bookings', icon: Calendar, href: '/dashboard/bookings' },
    { id: 'profile', label: 'Profile', icon: User, href: '/dashboard/profile' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/dashboard/settings' }
  ]

  const buddyNavItems = [
    { id: 'messages', label: 'Messages', icon: MessageCircle, href: '/buddy-dashboard/messages' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, href: '/buddy-dashboard/bookings' },
    { id: 'profile', label: 'Profile', icon: User, href: '/buddy-dashboard/profile' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/buddy-dashboard/settings' }
  ]

  const navItems = userType === 'traveler' ? travelerNavItems : buddyNavItems

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left side */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary-600">GetLocalBuddy</span>
              </Link>
              
              <div className="hidden md:block ml-8">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  userType === 'traveler' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {userType === 'traveler' ? 'Traveler Dashboard' : 'Buddy Dashboard'}
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {userType === 'traveler' ? 'Sarah Johnson' : 'Zoltán Kovács'}
                </span>
              </div>

              {/* Logout */}
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-[calc(100vh-4rem)]">
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map(item => {
                const IconComponent = item.icon
                const isActive = currentPage === item.id
                
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary-100 text-primary-700 border border-primary-200'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 mr-3" />
                      {item.label}
                      {item.id === 'messages' && (
                        <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          2
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                {userType === 'traveler' ? (
                  <>
                    <Button variant="gradient" size="sm" className="w-full justify-start">
                      <Search className="w-4 h-4 mr-2" />
                      Find Experiences
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      New Booking
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="gradient" size="sm" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Manage Availability
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      Update Profile
                    </Button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
