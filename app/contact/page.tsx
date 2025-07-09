'use client'

import React, { useState } from 'react'
import { 
  ArrowLeft, Mail, Phone, MessageCircle, Clock, MapPin, 
  Send, User, AlertCircle, CheckCircle, Headphones, Shield, 
  FileText, DollarSign, Users, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    priority: 'normal',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, this would submit to backend
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: 'general',
        priority: 'normal',
        message: ''
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@getlocalbuddy.com',
      responseTime: 'Within 24 hours',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available in-app',
      responseTime: 'Immediate response',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with us',
      contact: '+36 1 234 5678',
      responseTime: 'Mon-Fri, 9AM-6PM CET',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ]

  const supportCategories = [
    {
      icon: User,
      title: 'Account & Profile',
      description: 'Login issues, profile updates, verification',
      email: 'accounts@getlocalbuddy.com'
    },
    {
      icon: DollarSign,
      title: 'Payments & Billing',
      description: 'Payment problems, refunds, invoices',
      email: 'billing@getlocalbuddy.com'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Report safety concerns, suspicious activity',
      email: 'safety@getlocalbuddy.com'
    },
    {
      icon: Users,
      title: 'Buddy Applications',
      description: 'Application status, requirements, approval',
      email: 'buddies@getlocalbuddy.com'
    },
    {
      icon: FileText,
      title: 'Legal & Privacy',
      description: 'Terms of service, privacy policy questions',
      email: 'legal@getlocalbuddy.com'
    },
    {
      icon: Globe,
      title: 'Partnership & Business',
      description: 'Business partnerships, media inquiries',
      email: 'business@getlocalbuddy.com'
    }
  ]

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
              <h1 className="text-xl font-bold text-gray-900">Contact Support</h1>
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
            <Headphones className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our support team is here to assist you with any questions or issues you may have.
            Choose the best way to reach us below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-6 h-6 ${method.textColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="font-medium text-gray-900 mb-1">{method.contact}</p>
                <p className="text-sm text-gray-500">{method.responseTime}</p>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Message sent successfully!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject Category
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="general">General Question</option>
                      <option value="account">Account & Profile</option>
                      <option value="booking">Booking Issue</option>
                      <option value="payment">Payment & Billing</option>
                      <option value="safety">Safety Concern</option>
                      <option value="technical">Technical Problem</option>
                      <option value="buddy">Buddy Application</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="normal">Normal - Standard request</option>
                      <option value="high">High - Urgent issue</option>
                      <option value="critical">Critical - Safety concern</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please describe your question or issue in detail..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Include relevant details like booking IDs, error messages, or steps you've already tried.
                  </p>
                </div>

                <Button type="submit" variant="gradient" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Support Categories & Info */}
          <div className="space-y-8">
            {/* Specialized Support */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Support Teams</h3>
              <p className="text-gray-600 mb-6">
                For faster resolution, contact our specialized teams directly based on your issue type.
              </p>
              
              <div className="space-y-4">
                {supportCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{category.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                          <a 
                            href={`mailto:${category.email}`}
                            className="text-sm text-primary-600 hover:text-primary-700"
                          >
                            {category.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-bold text-red-900">Emergency Support</h3>
              </div>
              <p className="text-red-800 mb-4">
                If you're experiencing an immediate safety concern or emergency situation while using GetLocalBuddy:
              </p>
              <div className="space-y-2">
                <p className="text-red-900 font-medium">📞 Emergency Hotline: +36 1 911 0000</p>
                <p className="text-red-900 font-medium">📧 Emergency Email: emergency@getlocalbuddy.com</p>
                <p className="text-sm text-red-700">Available 24/7 for urgent safety matters</p>
              </div>
            </div>

            {/* Office Hours & Response Times */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                <Clock className="w-5 h-5 inline mr-2" />
                Support Hours & Response Times
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Business Hours</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (CET)</p>
                    <p>Saturday: 10:00 AM - 4:00 PM (CET)</p>
                    <p>Sunday: Closed (Emergency support available)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Expected Response Times</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• <strong>Critical/Safety:</strong> Within 1 hour</p>
                    <p>• <strong>High Priority:</strong> Within 4 hours</p>
                    <p>• <strong>Normal:</strong> Within 24 hours</p>
                    <p>• <strong>Low Priority:</strong> Within 2-3 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                <MapPin className="w-5 h-5 inline mr-2" />
                Our Office
              </h3>
              
              <div className="space-y-2 text-gray-600">
                <p className="font-medium text-gray-900">GetLocalBuddy Headquarters</p>
                <p>Váci út 123, 4th Floor</p>
                <p>1134 Budapest, Hungary</p>
                <p className="mt-3">
                  <strong>Note:</strong> Our office is currently by appointment only. 
                  Please contact us in advance if you need to visit in person.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Looking for quick answers?</h3>
            <p className="text-gray-600 mb-6">
              Check our FAQ section for instant answers to common questions about GetLocalBuddy.
            </p>
            <Link href="/faq">
              <Button variant="gradient">
                <FileText className="w-4 h-4 mr-2" />
                Browse FAQ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
