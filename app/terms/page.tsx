'use client'

import React from 'react'
import { ArrowLeft, FileText, Users, DollarSign, Shield, AlertTriangle, Scale, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function TermsOfService() {
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
              <h1 className="text-xl font-bold text-gray-900">Terms of Service</h1>
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
            <FileText className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of GetLocalBuddy and the relationship between travelers and local buddies.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: July 9, 2025 • Effective: July 9, 2025
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="#acceptance" className="text-primary-600 hover:text-primary-700 text-sm">1. Acceptance of Terms</a>
            <a href="#platform-description" className="text-primary-600 hover:text-primary-700 text-sm">2. Platform Description</a>
            <a href="#user-accounts" className="text-primary-600 hover:text-primary-700 text-sm">3. User Accounts</a>
            <a href="#bookings-payments" className="text-primary-600 hover:text-primary-700 text-sm">4. Bookings & Payments</a>
            <a href="#user-conduct" className="text-primary-600 hover:text-primary-700 text-sm">5. User Conduct</a>
            <a href="#cancellation" className="text-primary-600 hover:text-primary-700 text-sm">6. Cancellation Policy</a>
            <a href="#liability" className="text-primary-600 hover:text-primary-700 text-sm">7. Liability & Disclaimers</a>
            <a href="#termination" className="text-primary-600 hover:text-primary-700 text-sm">8. Termination</a>
          </div>
        </div>

        <div className="space-y-8">
          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                By accessing or using GetLocalBuddy ("Platform", "Service"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, please do not use our Platform.
              </p>
              
              <p>
                These Terms constitute a legally binding agreement between you and GetLocalBuddy Kft. ("Company", "we", "us"). 
                We reserve the right to modify these Terms at any time, with notice provided through our Platform.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> You must be at least 18 years old to use GetLocalBuddy. 
                  By using our Platform, you represent that you meet this age requirement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Platform Description */}
          <section id="platform-description" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Platform Description</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What GetLocalBuddy Does</h3>
                <p className="text-gray-600 mb-4">
                  GetLocalBuddy is a marketplace that connects travelers with local residents ("Buddies") who offer authentic local experiences. 
                  We facilitate introductions, bookings, and payments, but we are not a party to the actual experiences provided.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Travelers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Browse local experiences and buddies</li>
                      <li>• Book and pay for experiences securely</li>
                      <li>• Communicate with local buddies</li>
                      <li>• Leave reviews and ratings</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Buddies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Create profiles and list experiences</li>
                      <li>• Receive bookings and communicate with travelers</li>
                      <li>• Provide authentic local experiences</li>
                      <li>• Receive payments through our platform</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>Platform Role:</strong> GetLocalBuddy acts as an intermediary platform. We do not provide the actual experiences, 
                  which are provided independently by Buddies. We facilitate connections and transactions but are not responsible for the quality or safety of experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: User Accounts */}
          <section id="user-accounts" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. User Accounts & Verification</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• You must provide accurate and complete information during registration</li>
                  <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>• One person may only maintain one account</li>
                  <li>• You must immediately notify us of any unauthorized use of your account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Verification Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">All Users</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Email verification required</li>
                      <li>• Phone number verification recommended</li>
                      <li>• Profile photo encouraged</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Buddy Additional Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Government-issued ID verification</li>
                      <li>• Background check (where legally required)</li>
                      <li>• Address verification</li>
                      <li>• Application review and approval</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Bookings & Payments */}
          <section id="bookings-payments" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Bookings & Payments</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Process</h3>
                <ol className="space-y-2 text-gray-600">
                  <li>1. <strong>Selection:</strong> Travelers browse and select experiences and buddies</li>
                  <li>2. <strong>Booking Request:</strong> Travelers submit booking requests with preferred dates/times</li>
                  <li>3. <strong>Confirmation:</strong> Buddies confirm or decline requests within 24 hours</li>
                  <li>4. <strong>Payment:</strong> Payment is processed upon confirmation</li>
                  <li>5. <strong>Experience:</strong> Travelers and buddies meet as arranged</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">For Travelers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Payment due upon booking confirmation</li>
                      <li>• All major credit cards accepted</li>
                      <li>• Prices include applicable taxes</li>
                      <li>• Service fees are non-refundable</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">For Buddies</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Platform commission: 20% of booking value</li>
                      <li>• Payments released 24 hours after experience completion</li>
                      <li>• Minimum payout threshold: $25</li>
                      <li>• Monthly payout to registered bank account</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  <strong>Secure Payments:</strong> All payments are processed through secure, PCI-compliant payment processors. 
                  GetLocalBuddy does not store credit card information.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: User Conduct */}
          <section id="user-conduct" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. User Conduct & Prohibited Activities</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Behavior</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Treat all users with respect and courtesy</li>
                  <li>• Provide honest and accurate information in profiles and communications</li>
                  <li>• Respect local laws, customs, and regulations</li>
                  <li>• Arrive punctually for confirmed experiences</li>
                  <li>• Communicate promptly and clearly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Strictly Forbidden</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Harassment, discrimination, or hate speech</li>
                      <li>• Sharing false or misleading information</li>
                      <li>• Attempting to circumvent our payment system</li>
                      <li>• Requesting or providing illegal services</li>
                      <li>• Sharing personal contact information in initial messages</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Platform Misuse</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Creating fake accounts or impersonating others</li>
                      <li>• Spamming or sending unsolicited promotional content</li>
                      <li>• Attempting to manipulate reviews or ratings</li>
                      <li>• Using automated tools or bots</li>
                      <li>• Interfering with platform functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">
                  <strong>Enforcement:</strong> Violations may result in warnings, account suspension, or permanent termination. 
                  Serious violations may be reported to law enforcement authorities.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Cancellation Policy */}
          <section id="cancellation" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">6. Cancellation & Refund Policy</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Traveler Cancellations</h3>
                <div className="space-y-3">
                  <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-1">Free Cancellation (24+ hours before)</h4>
                    <p className="text-sm text-green-700">Full refund minus service fees</p>
                  </div>
                  
                  <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-1">Late Cancellation (Less than 24 hours)</h4>
                    <p className="text-sm text-yellow-700">50% refund, Buddy receives 50% compensation</p>
                  </div>
                  
                  <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-red-900 mb-1">No-Show</h4>
                    <p className="text-sm text-red-700">No refund, Buddy receives full payment</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Buddy Cancellations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>With Notice (24+ hours):</strong> Traveler receives full refund, Buddy may face account review</li>
                  <li>• <strong>Emergency/Last Minute:</strong> Traveler receives full refund, case-by-case review</li>
                  <li>• <strong>Repeated Cancellations:</strong> May result in account suspension</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>Extenuating Circumstances:</strong> We may waive cancellation penalties for events beyond your control 
                  (severe weather, medical emergencies, etc.). Contact support for review.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Liability & Disclaimers */}
          <section id="liability" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">7. Liability & Disclaimers</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Role & Limitations</h3>
                <p className="text-gray-600 mb-4">
                  GetLocalBuddy is a technology platform that facilitates connections between travelers and buddies. 
                  We do not provide the actual experiences, which are provided independently by Buddies.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    <strong>Important Disclaimer:</strong> We do not guarantee the quality, safety, or legality of experiences. 
                    Users participate in experiences at their own risk and are responsible for their own safety and decisions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• GetLocalBuddy's liability is limited to the amount paid for the specific booking</li>
                  <li>• We are not liable for indirect, incidental, or consequential damages</li>
                  <li>• Users are responsible for obtaining appropriate travel and health insurance</li>
                  <li>• We are not responsible for lost, stolen, or damaged personal property</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Responsibility</h3>
                <p className="text-gray-600">
                  Users acknowledge that they are responsible for evaluating the suitability and safety of experiences. 
                  We encourage users to exercise common sense, meet in public places, inform others of their plans, 
                  and trust their instincts about safety.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Termination */}
          <section id="termination" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">8. Termination</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Either you or GetLocalBuddy may terminate your account at any time. 
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in harmful behavior.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">User-Initiated Termination</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Close account anytime through settings</li>
                    <li>• Complete pending bookings before closure</li>
                    <li>• Outstanding payments will be processed</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Platform-Initiated Termination</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Violation of Terms of Service</li>
                    <li>• Fraudulent or illegal activity</li>
                    <li>• Repeated policy violations</li>
                    <li>• Safety concerns</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
                <p className="text-gray-800">
                  <strong>Effect of Termination:</strong> Upon termination, your access to the platform will cease, 
                  but these Terms will remain in effect for completed transactions and any ongoing legal obligations.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions about our Terms?</h3>
            <p className="text-gray-600 mb-6">
              Our legal team is available to clarify any aspects of these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="gradient">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Legal Team
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="outline">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
