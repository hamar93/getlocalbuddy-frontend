'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Travelers",
      links: [
        { name: "How it works", href: "/how-it-works" },
        { name: "Find a Buddy", href: "/find-buddy" },
        { name: "Popular Cities", href: "/cities" },
        { name: "Safety Guidelines", href: "/safety" },
        { name: "Trust & Safety", href: "/trust-safety" },
        { name: "Travel Tips", href: "/travel-tips" }
      ]
    },
    {
      title: "Buddies",
      links: [
        { name: "Become a Buddy", href: "/become-buddy" },
        { name: "Buddy Guidelines", href: "/buddy-guidelines" },
        { name: "Earnings Calculator", href: "/earnings" },
        { name: "Buddy Resources", href: "/resources" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Buddy Community", href: "/community" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Report an Issue", href: "/report" },
        { name: "Emergency Support", href: "/emergency" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Feedback", href: "/feedback" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Investors", href: "/investors" },
        { name: "Partnerships", href: "/partnerships" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/getlocalbuddy", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/getlocalbuddy", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/getlocalbuddy", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/getlocalbuddy", label: "LinkedIn" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-6">
                <span className="text-2xl font-bold text-primary-400">
                  GetLocalBuddy
                </span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your local friend in every city. Connecting travelers with authentic local experiences worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span>hello@getlocalbuddy.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get travel tips, buddy spotlights, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} GetLocalBuddy. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
