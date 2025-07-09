'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PopularCities = () => {
  const cities = [
    {
      name: "Budapest",
      country: "Hungary",
      buddyCount: 124,
      startingPrice: 18,
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=500&h=300&fit=crop",
      gradient: "from-blue-600 to-purple-600",
      description: "Thermal baths, ruin bars, and stunning architecture"
    },
    {
      name: "Prague",
      country: "Czech Republic", 
      buddyCount: 98,
      startingPrice: 22,
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=500&h=300&fit=crop",
      gradient: "from-emerald-600 to-teal-600",
      description: "Fairy-tale castles and medieval charm"
    },
    {
      name: "Barcelona",
      country: "Spain",
      buddyCount: 156,
      startingPrice: 25,
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&h=300&fit=crop",
      gradient: "from-orange-600 to-red-600",
      description: "Gaudí masterpieces and vibrant beach culture"
    },
    {
      name: "Vienna",
      country: "Austria",
      buddyCount: 89,
      startingPrice: 28,
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=500&h=300&fit=crop",
      gradient: "from-purple-600 to-pink-600",
      description: "Imperial palaces and coffee house culture"
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      buddyCount: 167,
      startingPrice: 30,
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=500&h=300&fit=crop",
      gradient: "from-cyan-600 to-blue-600",
      description: "Canals, museums, and cycling adventures"
    },
    {
      name: "Rome",
      country: "Italy", 
      buddyCount: 143,
      startingPrice: 24,
      image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=500&h=300&fit=crop",
      gradient: "from-amber-600 to-orange-600",
      description: "Ancient history meets modern Italian lifestyle"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing cities with help from verified local buddies who know all the best spots.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Link 
              key={index}
              href={`/cities/${city.name.toLowerCase()}`}
              className="group block"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${city.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${city.gradient} opacity-60`} />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                    From ${city.startingPrice}/hr
                  </div>

                  {/* Country Flag/Name */}
                  <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-white">
                    {city.country}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {city.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{city.buddyCount} buddies</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Cities Button */}
        <div className="text-center mt-12">
          <Link href="/cities">
            <Button variant="outline" size="lg" className="group">
              View All Cities
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularCities
