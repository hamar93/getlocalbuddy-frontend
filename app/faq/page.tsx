'use client'

import React, { useState } from 'react'
import { 
  ArrowLeft, Search, ChevronDown, ChevronUp, HelpCircle, 
  User, DollarSign, Shield, Users, MapPin, MessageCircle,
  Clock, FileText, AlertTriangle, CheckCircle, Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Getting Started
  {
    id: 'getting-started-1',
    question: 'What is GetLocalBuddy?',
    answer: 'GetLocalBuddy is a platform that connects travelers with local residents (Buddies) who offer authentic local experiences. Whether you want to explore hidden gems, try local cuisine, or experience a city like a local, our Buddies are here to make your trip unforgettable.',
    category: 'getting-started'
  },
  {
    id: 'getting-started-2',
    question: 'How does GetLocalBuddy work?',
    answer: 'It\'s simple! Travelers browse available experiences and Buddies in their destination city, send booking requests, and once confirmed, meet up with their Buddy for an authentic local experience. Buddies create profiles, list their experiences, and get paid for sharing their city with visitors.',
    category: 'getting-started'
  },
  {
    id: 'getting-started-3',
    question: 'Is GetLocalBuddy safe to use?',
    answer: 'Yes! We take safety seriously. All Buddies go through a verification process including ID checks and background verification where legally required. We also have a review system, 24/7 emergency support, and safety guidelines for all users.',
    category: 'getting-started'
  },

  // Account & Profile
  {
    id: 'account-1',
    question: 'How do I create an account?',
    answer: 'You can sign up for free by clicking the "Sign Up" button on our homepage. You\'ll need to provide your email, create a password, and verify your email address. You can then complete your profile with additional information.',
    category: 'account'
  },
  {
    id: 'account-2',
    question: 'What information do I need to provide in my profile?',
    answer: 'For basic use, you need a name, email, and profile photo. For enhanced trust and better matches, we recommend adding your bio, languages spoken, interests, and completing our verification process.',
    category: 'account'
  },
  {
    id: 'account-3',
    question: 'How do I verify my account?',
    answer: 'You can verify your email address (required), phone number (recommended), and government-issued ID (highly recommended). Verified users have higher trust ratings and better booking success rates.',
    category: 'account'
  },

  // Booking & Payments
  {
    id: 'booking-1',
    question: 'How do I book an experience?',
    answer: 'Browse experiences in your destination city, select a Buddy and experience that interests you, choose your preferred date and time, and send a booking request. The Buddy has 24 hours to confirm or decline your request.',
    category: 'booking'
  },
  {
    id: 'booking-2',
    question: 'When do I pay for my booking?',
    answer: 'Payment is processed automatically when your booking is confirmed by the Buddy. We accept all major credit cards and ensure secure payment processing.',
    category: 'booking'
  },
  {
    id: 'booking-3',
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation with full refund if you cancel 24+ hours before the experience. Cancellations within 24 hours receive a 50% refund. No-shows are not refunded. Emergency situations are reviewed case-by-case.',
    category: 'booking'
  },
  {
    id: 'booking-4',
    question: 'How much do experiences cost?',
    answer: 'Experience prices vary by city, duration, and type of activity. Most experiences range from $25-100. Prices are set by individual Buddies and include their time and local expertise. Platform service fees are added at checkout.',
    category: 'booking'
  },

  // For Buddies
  {
    id: 'buddy-1',
    question: 'How do I become a Buddy?',
    answer: 'Apply through our "Become a Buddy" page. You\'ll need to complete an application, provide ID verification, pass a background check (where required), and create your profile with experiences you\'d like to offer.',
    category: 'buddy'
  },
  {
    id: 'buddy-2',
    question: 'What are the requirements to become a Buddy?',
    answer: 'You must be 18+, a local resident of your city, have a clean background check, provide government ID verification, and demonstrate good communication skills. Passion for your city and hospitality experience are highly valued!',
    category: 'buddy'
  },
  {
    id: 'buddy-3',
    question: 'How much can I earn as a Buddy?',
    answer: 'Earnings vary based on your experience prices, frequency of bookings, and city. GetLocalBuddy takes a 20% commission, so you keep 80% of your experience price. Many active Buddies earn $500-2000+ per month.',
    category: 'buddy'
  },
  {
    id: 'buddy-4',
    question: 'When and how do I get paid?',
    answer: 'Payments are released 24 hours after your experience is completed. We pay monthly to your registered bank account once you reach the $25 minimum payout threshold.',
    category: 'buddy'
  },

  // Safety & Trust
  {
    id: 'safety-1',
    question: 'What safety measures do you have in place?',
    answer: 'We require ID verification for all users, background checks for Buddies, have a review and rating system, provide 24/7 emergency support, and offer safety guidelines. We also have a reporting system for any concerns.',
    category: 'safety'
  },
  {
    id: 'safety-2',
    question: 'What should I do if I feel unsafe during an experience?',
    answer: 'Trust your instincts and prioritize your safety. Contact our emergency hotline (+36 1 911 0000) immediately if you feel threatened. You can also end the experience early and report the incident through our platform.',
    category: 'safety'
  },
  {
    id: 'safety-3',
    question: 'How do you verify Buddies?',
    answer: 'All Buddies must provide government-issued ID, proof of local residence, and pass background checks where legally required. We also review their application and may conduct interviews before approval.',
    category: 'safety'
  },

  // Technical
  {
    id: 'technical-1',
    question: 'Do you have a mobile app?',
    answer: 'Currently, GetLocalBuddy is available as a web application optimized for mobile browsers. A dedicated mobile app is in development and will be available soon.',
    category: 'technical'
  },
  {
    id: 'technical-2',
    question: 'I\'m having trouble with the website. What should I do?',
    answer: 'Try refreshing your browser, clearing your cache, or using a different browser. If the problem persists, contact our technical support at support@getlocalbuddy.com with details about the issue.',
    category: 'technical'
  }
]

const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'getting-started', label: 'Getting Started', icon: User },
  { id: 'account', label: 'Account & Profile', icon: User },
  { id: 'booking', label: 'Booking & Payments', icon: DollarSign },
  { id: 'buddy', label: 'For Buddies', icon: Users },
  { id: 'safety', label: 'Safety & Trust', icon: Shield },
  { id: 'technical', label: 'Technical Support', icon: AlertTriangle }
]

export default function FAQPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.back()}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h1>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about GetLocalBuddy, or search for specific topics below.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map(category => {
                  const IconComponent = category.icon
                  const count = category.id === 'all' 
                    ? faqData.length 
                    : faqData.filter(faq => faq.category === category.id).length
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <IconComponent className="w-4 h-4 mr-3" />
                        <span className="text-sm">{category.label}</span>
                      </div>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {count}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            {filteredFAQs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or browse different categories.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedCategory === 'all' ? 'All Questions' : categories.find(c => c.id === selectedCategory)?.label}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                  </p>
                </div>

                {filteredFAQs.map(faq => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedItems.includes(faq.id) && (
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Our support team is ready to help you with personalized assistance.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Become a Buddy</h3>
            <p className="text-sm text-gray-600 mb-4">
              Share your city with travelers and earn money while making new friends.
            </p>
            <Link href="/become-buddy">
              <Button variant="outline" size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Find Experiences</h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover authentic local experiences in cities around the world.
            </p>
            <Link href="/experiences">
              <Button variant="outline" size="sm">
                Browse Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
          <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">Was this helpful?</h3>
          <p className="text-gray-600 mb-6">
            Help us improve our FAQ by letting us know if you found what you were looking for.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="gradient">
              👍 Yes, this helped
            </Button>
            <Button variant="outline">
              👎 No, I need more help
            </Button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link href="/contact">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
