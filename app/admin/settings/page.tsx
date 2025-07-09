'use client'

import React, { useState } from 'react'
import { 
  ArrowLeft, Save, AlertTriangle, DollarSign, Mail, Shield, 
  Globe, Users, Settings, Bell, Lock, CreditCard, Languages,
  ToggleLeft, ToggleRight, Percent, Clock, MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

// Mock settings data
const mockSettings = {
  platform: {
    maintenanceMode: false,
    newRegistrations: true,
    publicBookings: true,
    guestMode: false
  },
  financial: {
    commissionRate: 20,
    buddyMinPayout: 25,
    travelerRefundWindow: 24,
    instantPayouts: false
  },
  notifications: {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: true
  },
  security: {
    twoFactorRequired: false,
    backgroundChecksRequired: true,
    idVerificationRequired: true,
    autoSuspendReports: 3
  },
  localization: {
    supportedCountries: ['Hungary', 'Austria', 'Czech Republic', 'Slovakia', 'Germany'],
    supportedLanguages: ['English', 'Hungarian', 'German', 'Czech'],
    defaultCurrency: 'EUR',
    defaultLanguage: 'English'
  }
}

interface ToggleProps {
  enabled: boolean
  onChange: (enabled: boolean) => void
  label: string
  description?: string
}

function ToggleSwitch({ enabled, onChange, label, description }: ToggleProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-primary-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  )
}

export default function AdminSettings() {
  const router = useRouter()
  
  const [settings, setSettings] = useState(mockSettings)
  const [activeSection, setActiveSection] = useState<'platform' | 'financial' | 'notifications' | 'security' | 'localization'>('platform')
  const [hasChanges, setHasChanges] = useState(false)

  const updatePlatformSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      platform: { ...prev.platform, [key]: value }
    }))
    setHasChanges(true)
  }

  const updateFinancialSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      financial: { ...prev.financial, [key]: value }
    }))
    setHasChanges(true)
  }

  const updateNotificationSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value }
    }))
    setHasChanges(true)
  }

  const updateSecuritySetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      security: { ...prev.security, [key]: value }
    }))
    setHasChanges(true)
  }

  const updateLocalizationSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      localization: { ...prev.localization, [key]: value }
    }))
    setHasChanges(true)
  }

  const handleSaveSettings = () => {
    // In real app, this would save to backend
    alert('Settings saved successfully!')
    setHasChanges(false)
  }

  const sections = [
    { id: 'platform', label: 'Platform Settings', icon: Settings },
    { id: 'financial', label: 'Financial Settings', icon: DollarSign },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security & Verification', icon: Shield },
    { id: 'localization', label: 'Localization', icon: Globe }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.back()}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Admin
              </Button>
              <h1 className="text-xl font-bold text-gray-900">Platform Settings</h1>
            </div>
            
            {hasChanges && (
              <Button variant="gradient" onClick={handleSaveSettings}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {sections.map(section => {
                const IconComponent = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id as any)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-100 text-primary-700 border border-primary-200'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {section.label}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Platform Settings */}
            {activeSection === 'platform' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Platform Settings</h2>
                  <p className="text-gray-600">Configure general platform behavior and access controls.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                  
                  <div className="space-y-1 divide-y divide-gray-200">
                    <ToggleSwitch
                      enabled={settings.platform.maintenanceMode}
                      onChange={(value) => updatePlatformSetting('maintenanceMode', value)}
                      label="Maintenance Mode"
                      description="Temporarily disable the platform for maintenance"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.platform.newRegistrations}
                      onChange={(value) => updatePlatformSetting('newRegistrations', value)}
                      label="New User Registrations"
                      description="Allow new users to register on the platform"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.platform.publicBookings}
                      onChange={(value) => updatePlatformSetting('publicBookings', value)}
                      label="Public Booking System"
                      description="Allow users to make bookings publicly"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.platform.guestMode}
                      onChange={(value) => updatePlatformSetting('guestMode', value)}
                      label="Guest Browsing"
                      description="Allow non-registered users to browse experiences"
                    />
                  </div>
                </div>

                {settings.platform.maintenanceMode && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="text-red-800 font-medium">Maintenance Mode Active</h4>
                        <p className="text-red-700 text-sm mt-1">
                          The platform is currently in maintenance mode. Users cannot access the site.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Financial Settings */}
            {activeSection === 'financial' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Settings</h2>
                  <p className="text-gray-600">Configure commission rates, payouts, and financial policies.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission & Payouts</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Percent className="w-4 h-4 inline mr-1" />
                        Platform Commission Rate
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={settings.financial.commissionRate}
                          onChange={(e) => updateFinancialSetting('commissionRate', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          min="0"
                          max="50"
                        />
                        <span className="absolute right-3 top-2 text-gray-500">%</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Current: {settings.financial.commissionRate}% per booking</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        Minimum Buddy Payout
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          value={settings.financial.buddyMinPayout}
                          onChange={(e) => updateFinancialSetting('buddyMinPayout', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          min="10"
                        />
                        <span className="absolute left-3 top-2 text-gray-500">$</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Minimum amount before payout</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Refund Window (hours)
                      </label>
                      <input
                        type="number"
                        value={settings.financial.travelerRefundWindow}
                        onChange={(e) => updateFinancialSetting('travelerRefundWindow', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        min="1"
                        max="168"
                      />
                      <p className="text-xs text-gray-500 mt-1">Free cancellation window</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <ToggleSwitch
                      enabled={settings.financial.instantPayouts}
                      onChange={(value) => updateFinancialSetting('instantPayouts', value)}
                      label="Instant Payouts"
                      description="Enable instant payouts to buddies (additional fees may apply)"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeSection === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Notification Settings</h2>
                  <p className="text-gray-600">Configure how the platform communicates with users.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Communication Channels</h3>
                  
                  <div className="space-y-1 divide-y divide-gray-200">
                    <ToggleSwitch
                      enabled={settings.notifications.emailNotifications}
                      onChange={(value) => updateNotificationSetting('emailNotifications', value)}
                      label="Email Notifications"
                      description="Send booking confirmations, reminders, and updates via email"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.notifications.smsNotifications}
                      onChange={(value) => updateNotificationSetting('smsNotifications', value)}
                      label="SMS Notifications"
                      description="Send urgent notifications via SMS (additional costs apply)"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.notifications.pushNotifications}
                      onChange={(value) => updateNotificationSetting('pushNotifications', value)}
                      label="Push Notifications"
                      description="Send real-time notifications through mobile app"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.notifications.marketingEmails}
                      onChange={(value) => updateNotificationSetting('marketingEmails', value)}
                      label="Marketing Emails"
                      description="Send promotional content and newsletters"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {activeSection === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Security & Verification</h2>
                  <p className="text-gray-600">Configure security requirements and verification processes.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification Requirements</h3>
                  
                  <div className="space-y-1 divide-y divide-gray-200">
                    <ToggleSwitch
                      enabled={settings.security.twoFactorRequired}
                      onChange={(value) => updateSecuritySetting('twoFactorRequired', value)}
                      label="Two-Factor Authentication"
                      description="Require 2FA for all user accounts"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.security.backgroundChecksRequired}
                      onChange={(value) => updateSecuritySetting('backgroundChecksRequired', value)}
                      label="Background Checks for Buddies"
                      description="Require background verification for all buddy applications"
                    />
                    
                    <ToggleSwitch
                      enabled={settings.security.idVerificationRequired}
                      onChange={(value) => updateSecuritySetting('idVerificationRequired', value)}
                      label="ID Verification Required"
                      description="Require government ID verification for all users"
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Auto-Suspend Threshold
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        value={settings.security.autoSuspendReports}
                        onChange={(e) => updateSecuritySetting('autoSuspendReports', parseInt(e.target.value))}
                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                        min="1"
                        max="10"
                      />
                      <span className="text-sm text-gray-600">
                        reports before automatic account suspension
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Localization */}
            {activeSection === 'localization' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Localization Settings</h2>
                  <p className="text-gray-600">Configure supported regions, languages, and currencies.</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Settings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Supported Countries
                      </label>
                      <div className="space-y-2">
                        {settings.localization.supportedCountries.map((country) => (
                          <div key={country} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm">{country}</span>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                              Remove
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" className="w-full">
                          Add Country
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Languages className="w-4 h-4 inline mr-1" />
                        Supported Languages
                      </label>
                      <div className="space-y-2">
                        {settings.localization.supportedLanguages.map((language) => (
                          <div key={language} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm">{language}</span>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                              Remove
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" className="w-full">
                          Add Language
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                      <select
                        value={settings.localization.defaultCurrency}
                        onChange={(e) => updateLocalizationSetting('defaultCurrency', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="EUR">EUR - Euro</option>
                        <option value="USD">USD - US Dollar</option>
                        <option value="HUF">HUF - Hungarian Forint</option>
                        <option value="CZK">CZK - Czech Koruna</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
                      <select
                        value={settings.localization.defaultLanguage}
                        onChange={(e) => updateLocalizationSetting('defaultLanguage', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      >
                        {settings.localization.supportedLanguages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
