'use client'

import React, { useState, useMemo } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchFilters from '@/components/SearchFilters'
import BuddyCard from '@/components/BuddyCard'
import { Loader2, MapPin, Users } from 'lucide-react'

// Mock data - later this will come from API
const mockBuddies = [
  {
    id: '1',
    name: 'Zoltán',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    city: 'Budapest',
    country: 'Hungary',
    rating: 4.9,
    reviewCount: 127,
    responseTime: 15,
    languages: ['English', 'Hungarian', 'German'],
    bio: 'Hey there! I\'m Zoltán, born and raised in Budapest. I love showing visitors the real Budapest - not just the tourist spots, but the places where locals actually hang out.',
    verified: true,
    backgroundChecked: true,
    specialties: ['Ruin Bars', 'Thermal Baths', 'Food Scene', 'Night Life', 'Architecture'],
    tiers: {
      cityTour: { available: true, hourlyRate: 25 },
      homeExperience: { available: true, priceRange: [45, 60] as [number, number] },
      vipLocalLife: { available: true, dailyRate: 150 },
      mysteryLocal: { available: true, price: 35, surpriseLevel: 'medium' as const }
    }
  },
  {
    id: '2',
    name: 'Maria',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    city: 'Barcelona',
    country: 'Spain',
    rating: 4.8,
    reviewCount: 89,
    responseTime: 12,
    languages: ['English', 'Spanish', 'Catalan', 'French'],
    bio: '¡Hola! I\'m Maria, a local artist and foodie from Barcelona. I can show you the real Catalan culture, amazing tapas spots, and secret beaches.',
    verified: true,
    backgroundChecked: false,
    specialties: ['Art Scene', 'Beach Culture', 'Tapas Tours', 'Gaudí Architecture', 'Local Markets'],
    tiers: {
      cityTour: { available: true, hourlyRate: 30 },
      homeExperience: { available: true, priceRange: [50, 70] as [number, number] },
      vipLocalLife: { available: false, dailyRate: 0 },
      mysteryLocal: { available: true, price: 45, surpriseLevel: 'wild' as const }
    }
  },
  {
    id: '3',
    name: 'Tomáš',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    city: 'Prague',
    country: 'Czech Republic',
    rating: 4.9,
    reviewCount: 156,
    responseTime: 8,
    languages: ['English', 'Czech', 'German', 'Russian'],
    bio: 'Welcome to Prague! I\'m Tomáš, a local historian who loves sharing the fascinating stories behind our beautiful city. Plus, I know the best beer halls!',
    verified: true,
    backgroundChecked: true,
    specialties: ['History Tours', 'Beer Culture', 'Castle District', 'Photography Spots', 'Local Pubs'],
    tiers: {
      cityTour: { available: true, hourlyRate: 22 },
      homeExperience: { available: true, priceRange: [40, 55] as [number, number] },
      vipLocalLife: { available: true, dailyRate: 120 },
      mysteryLocal: { available: false, price: 0, surpriseLevel: 'mild' as const }
    }
  },
  {
    id: '4',
    name: 'Sophie',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    city: 'Amsterdam',
    country: 'Netherlands',
    rating: 4.7,
    reviewCount: 203,
    responseTime: 20,
    languages: ['English', 'Dutch', 'French'],
    bio: 'Hi! I\'m Sophie, a local designer who loves cycling through Amsterdam\'s canals and discovering cozy cafés. Let me show you Amsterdam like a true local!',
    verified: false,
    backgroundChecked: true,
    specialties: ['Cycling Tours', 'Canal District', 'Design Scene', 'Coffee Culture', 'Local Markets'],
    tiers: {
      cityTour: { available: true, hourlyRate: 28 },
      homeExperience: { available: false, priceRange: [0, 0] as [number, number] },
      vipLocalLife: { available: true, dailyRate: 140 },
      mysteryLocal: { available: true, price: 40, surpriseLevel: 'medium' as const }
    }
  },
  {
    id: '5',
    name: 'Lorenzo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    city: 'Rome',
    country: 'Italy',
    rating: 4.9,
    reviewCount: 97,
    responseTime: 10,
    languages: ['English', 'Italian', 'Spanish'],
    bio: 'Ciao! I\'m Lorenzo, a chef and food lover from Rome. I can take you to the best trattorias and teach you to make authentic pasta at my home!',
    verified: true,
    backgroundChecked: true,
    specialties: ['Food Tours', 'Cooking Classes', 'Ancient History', 'Local Trattorias', 'Wine Tasting'],
    tiers: {
      cityTour: { available: true, hourlyRate: 27 },
      homeExperience: { available: true, priceRange: [55, 75] as [number, number] },
      vipLocalLife: { available: true, dailyRate: 160 },
      mysteryLocal: { available: true, price: 50, surpriseLevel: 'mild' as const }
    }
  },
  {
    id: '6',
    name: 'Anna',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    city: 'Vienna',
    country: 'Austria',
    rating: 4.8,
    reviewCount: 134,
    responseTime: 18,
    languages: ['English', 'German', 'Hungarian'],
    bio: 'Grüß Gott! I\'m Anna, a music student in Vienna. I love sharing our coffee house culture and can take you to concerts and hidden musical gems!',
    verified: true,
    backgroundChecked: false,
    specialties: ['Coffee Houses', 'Classical Music', 'Imperial History', 'Art Museums', 'Local Culture'],
    tiers: {
      cityTour: { available: true, hourlyRate: 26 },
      homeExperience: { available: true, priceRange: [48, 62] as [number, number] },
      vipLocalLife: { available: false, dailyRate: 0 },
      mysteryLocal: { available: true, price: 42, surpriseLevel: 'medium' as const }
    }
  }
]

export default function FindBuddyPage() {
  const [filters, setFilters] = useState<any>({})
  const [sortBy, setSortBy] = useState('rating')
  const [loading, setLoading] = useState(false)

  // Filter and sort buddies based on current filters
  const filteredBuddies = useMemo(() => {
    let filtered = [...mockBuddies]

    // City filter
    if (filters.city) {
      filtered = filtered.filter(buddy => buddy.city === filters.city)
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(buddy => 
        buddy.name.toLowerCase().includes(searchLower) ||
        buddy.bio.toLowerCase().includes(searchLower) ||
        buddy.specialties.some(specialty => specialty.toLowerCase().includes(searchLower))
      )
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(buddy => {
        const prices = []
        if (buddy.tiers.cityTour.available) prices.push(buddy.tiers.cityTour.hourlyRate)
        if (buddy.tiers.homeExperience.available) prices.push(buddy.tiers.homeExperience.priceRange[0])
        if (buddy.tiers.vipLocalLife.available) prices.push(buddy.tiers.vipLocalLife.dailyRate)
        if (buddy.tiers.mysteryLocal.available) prices.push(buddy.tiers.mysteryLocal.price)
        
        const minPrice = Math.min(...prices)
        return minPrice >= filters.priceRange[0] && minPrice <= filters.priceRange[1]
      })
    }

    // Languages filter
    if (filters.languages && filters.languages.length > 0) {
      filtered = filtered.filter(buddy =>
        filters.languages.some((lang: string) => buddy.languages.includes(lang))
      )
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(buddy => buddy.rating >= filters.rating)
    }

    // Tiers filter
    if (filters.tiers && filters.tiers.length > 0) {
      filtered = filtered.filter(buddy => {
        return filters.tiers.some((tier: string) => {
          switch (tier) {
            case 'City Tour': return buddy.tiers.cityTour.available
            case 'Home Experience': return buddy.tiers.homeExperience.available
            case 'VIP Local Life': return buddy.tiers.vipLocalLife.available
            case 'Mystery Local': return buddy.tiers.mysteryLocal.available
            default: return false
          }
        })
      })
    }

    // Verified filter
    if (filters.verified) {
      filtered = filtered.filter(buddy => buddy.verified)
    }

    // Background checked filter
    if (filters.backgroundChecked) {
      filtered = filtered.filter(buddy => buddy.backgroundChecked)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'price':
          const getMinPrice = (buddy: any) => {
            const prices = []
            if (buddy.tiers.cityTour.available) prices.push(buddy.tiers.cityTour.hourlyRate)
            if (buddy.tiers.homeExperience.available) prices.push(buddy.tiers.homeExperience.priceRange[0])
            if (buddy.tiers.vipLocalLife.available) prices.push(buddy.tiers.vipLocalLife.dailyRate)
            if (buddy.tiers.mysteryLocal.available) prices.push(buddy.tiers.mysteryLocal.price)
            return Math.min(...prices)
          }
          return getMinPrice(a) - getMinPrice(b)
        case 'responseTime':
          return a.responseTime - b.responseTime
        case 'reviews':
          return b.reviewCount - a.reviewCount
        default:
          return 0
      }
    })

    return filtered
  }, [filters, sortBy])

  const handleFilterChange = (newFilters: any) => {
    setLoading(true)
    setFilters(newFilters)
    // Simulate API call delay
    setTimeout(() => setLoading(false), 300)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Local Buddy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Connect with verified local buddies who'll show you their city like a true friend would. 
              From city tours to mystery experiences - find your perfect match!
            </p>
          </div>

          {/* Search and Filters */}
          <SearchFilters 
            onFilterChange={handleFilterChange}
            totalBuddies={filteredBuddies.length}
          />

          {/* Sort Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              >
                <option value="rating">Highest Rated</option>
                <option value="price">Lowest Price</option>
                <option value="responseTime">Fastest Response</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              {filteredBuddies.length} {filteredBuddies.length === 1 ? 'buddy' : 'buddies'} found
            </div>
          </div>

          {/* Results */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
              <span className="ml-3 text-gray-600">Finding perfect buddies...</span>
            </div>
          ) : filteredBuddies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBuddies.map(buddy => (
                <BuddyCard key={buddy.id} buddy={buddy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No buddies found</h3>
              <p className="text-gray-600">Try adjusting your filters or search in a different city.</p>
            </div>
          )}

          {/* Load More Button (for pagination later) */}
          {filteredBuddies.length > 0 && filteredBuddies.length >= 6 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                Load More Buddies
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
