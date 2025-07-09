'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ]

  const navigation = [
    { name: 'Find a Buddy', href: '/find-buddy' },
    { name: 'Popular Cities', href: '/cities' },
    { name: 'City Wiki', href: '/wiki' },
    { name: 'Become a Buddy', href: '/become-buddy' },
    { name: 'Help Center', href: '/help' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">
                GetLocalBuddy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Language selector + Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 border border-gray-300 rounded-lg hover:border-primary-300 transition-colors">
                <Globe className="w-4 h-4" />
                <span>{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                <span>{languages.find(lang => lang.code === selectedLanguage)?.name}</span>
              </button>
              
              {/* Language Dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => setSelectedLanguage(language.code)}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="gradient" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-gray-500 mb-2">Language</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.code)
                          setIsMenuOpen(false)
                        }}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedLanguage === language.code
                            ? 'bg-primary-100 text-primary-800'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link href="/login" className="block">
                  <Button variant="ghost" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button variant="gradient" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
