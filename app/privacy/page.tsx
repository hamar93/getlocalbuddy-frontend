'use client'

import React from 'react'
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PrivacyPolicy() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We take your privacy seriously. This policy explains how GetLocalBuddy collects, 
            uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: July 9, 2025
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="#information-we-collect" className="text-primary-600 hover:text-primary-700 text-sm">1. Information We Collect</a>
            <a href="#how-we-use" className="text-primary-600 hover:text-primary-700 text-sm">2. How We Use Your Information</a>
            <a href="#information-sharing" className="text-primary-600 hover:text-primary-700 text-sm">3. Information Sharing</a>
            <a href="#data-security" className="text-primary-600 hover:text-primary-700 text-sm">4. Data Security</a>
            <a href="#your-rights" className="text-primary-600 hover:text-primary-700 text-sm">5. Your Rights</a>
            <a href="#contact-us" className="text-primary-600 hover:text-primary-700 text-sm">6. Contact Us</a>
          </div>
        </div>

        <div className="space-y-8">
          {/* Section 1: Information We Collect */}
          <section id="information-we-collect" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Account Information:</strong> Name, email address, phone number, profile photo</li>
                  <li>• <strong>Profile Details:</strong> Bio, languages spoken, interests, location</li>
                  <li>• <strong>Verification Data:</strong> Government-issued ID, address verification documents</li>
                  <li>• <strong>Payment Information:</strong> Credit card details, bank account information (processed securely)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Activity Data:</strong> Bookings, messages, reviews, search history</li>
                  <li>• <strong>Device Information:</strong> IP address, browser type, device identifiers</li>
                  <li>• <strong>Location Data:</strong> GPS coordinates (when permitted), city/country information</li>
                  <li>• <strong>Communication:</strong> Messages between travelers and buddies, customer support interactions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section id="how-we-use" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create and manage your account</li>
                  <li>• Facilitate bookings and payments</li>
                  <li>• Enable communication between users</li>
                  <li>• Provide customer support</li>
                  <li>• Verify user identity and safety</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Improvement</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Analyze usage patterns and preferences</li>
                  <li>• Improve our recommendations</li>
                  <li>• Develop new features and services</li>
                  <li>• Prevent fraud and ensure security</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Information Sharing */}
          <section id="information-sharing" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Information Sharing</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>We never sell your personal information.</strong> We only share your information in the following circumstances:
              </p>
              
              <ul className="space-y-2">
                <li>• <strong>With Other Users:</strong> Profile information necessary for bookings (name, photo, reviews)</li>
                <li>• <strong>Service Providers:</strong> Payment processors, background check services, cloud hosting</li>
                <li>• <strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                <li>• <strong>Safety Reasons:</strong> To protect users from fraud, abuse, or safety threats</li>
                <li>• <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of our company</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-yellow-800">
                  <strong>Note:</strong> All data sharing is done with appropriate safeguards and only the minimum necessary information is shared.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section id="data-security" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h3>
                  <ul className="space-y-1">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Encrypted data storage</li>
                    <li>• Regular security audits and testing</li>
                    <li>• Secure payment processing (PCI DSS compliant)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Access Controls</h3>
                  <ul className="space-y-1">
                    <li>• Multi-factor authentication</li>
                    <li>• Role-based access restrictions</li>
                    <li>• Regular access reviews</li>
                    <li>• Employee security training</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-blue-800">
                  <strong>Data Retention:</strong> We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Your Rights */}
          <section id="your-rights" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Your Rights</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Under applicable privacy laws (including GDPR), you have the following rights:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Rights</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                    <li>• <strong>Rectification:</strong> Correct inaccurate information</li>
                    <li>• <strong>Erasure:</strong> Request deletion of your data</li>
                    <li>• <strong>Portability:</strong> Export your data in a readable format</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Control Rights</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Object:</strong> Opt-out of certain data processing</li>
                    <li>• <strong>Restrict:</strong> Limit how we use your data</li>
                    <li>• <strong>Withdraw Consent:</strong> Revoke previously given consent</li>
                    <li>• <strong>Complain:</strong> File complaints with supervisory authorities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <p className="text-green-800">
                  <strong>How to Exercise Your Rights:</strong> Contact us at privacy@getlocalbuddy.com or use the privacy controls in your account settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Contact Us */}
          <section id="contact-us" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">6. Contact Us</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">GetLocalBuddy Privacy Team</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> privacy@getlocalbuddy.com</p>
                    <p><strong>Phone:</strong> +36 1 234 5678</p>
                    <p><strong>Response Time:</strong> Within 72 hours</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Mailing Address</h3>
                  <div className="text-gray-600">
                    <p>GetLocalBuddy Kft.</p>
                    <p>Privacy Department</p>
                    <p>1234 Budapest</p>
                    <p>Váci út 123, 4. emelet</p>
                    <p>Hungary</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">
                  This Privacy Policy may be updated from time to time. We will notify you of any material changes by email or through our platform.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions about your privacy?</h3>
            <p className="text-gray-600 mb-6">
              Our privacy team is here to help you understand and control your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="gradient">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Privacy Team
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline">
                  View Privacy FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
