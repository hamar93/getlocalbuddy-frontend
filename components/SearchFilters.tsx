'use client'

import React, { useState } from 'react'
import { Search, Filter, MapPin, Globe, DollarSign, Star, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void
  totalBuddies: number
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange, totalBuddies }) => {
  const [filters, setFilters] = useState({
    city: '',
    search: '',
    priceRange: [0, 200],
    languages: [] as string[],
    rating: 0,
    availability: '',
    tiers: [] as string[],
    verified: false,
    backgroundChecked: false
  })

  const [showAdvanced, setShowAdvanced] = useState(false)

  const cities = [
    'Budapest', 'Prague', 'Vienna', 'Barcelona', 'Amsterdam', 'Rome', 
    'Lisbon', 'Krakow', 'Berlin', 'Paris'
  ]

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Hungarian', 'Czech', 'Dutch', 'Polish'
  ]

  const tierOptions = [
    'City Tour', 'Home Experience', 'VIP Local Life', 'Mystery Local'
  ]

  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const toggleArrayFilter = (key: 'languages' | 'tiers', value: string) => {
    const currentArray = filters[key]
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]
    updateFilter(key, newArray)
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      city: '',
      search: '',
      priceRange: [0, 200],
      languages: [] as string[],
      rating: 0,
      availability: '',
      tiers: [] as string[],
      verified: false,
      backgroundChecked: false
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search buddies by name, specialties, or interests..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-3">
          <select
            value={filters.city}
            onChange={(e) => updateFilter('city', e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent min-w-[160px]"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          
          <Button
            variant={showAdvanced ? "default" : "outline"}
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="space-y-6 pt-6 border-t border-gray-200">
          {/* Price Range */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <DollarSign className="w-4 h-4 mr-2" />
              Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="200"
                value={filters.priceRange[0]}
                onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="200"
                value={filters.priceRange[1]}
                onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>

          {/* Languages */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <Globe className="w-4 h-4 mr-2" />
              Languages
            </label>
            <div className="flex flex-wrap gap-2">
              {languages.map(language => (
                <button
                  key={language}
                  onClick={() => toggleArrayFilter('languages', language)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.languages.includes(language)
                      ? 'bg-primary-100 text-primary-800 border border-primary-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Tiers */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <Users className="w-4 h-4 mr-2" />
              Experience Types
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {tierOptions.map(tier => (
                <button
                  key={tier}
                  onClick={() => toggleArrayFilter('tiers', tier)}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors border-2 ${
                    filters.tiers.includes(tier)
                      ? 'bg-primary-50 text-primary-800 border-primary-300'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <Star className="w-4 h-4 mr-2" />
              Minimum Rating
            </label>
            <div className="flex items-center space-x-4">
              {[4.0, 4.5, 4.8, 4.9].map(rating => (
                <button
                  key={rating}
                  onClick={() => updateFilter('rating', filters.rating === rating ? 0 : rating)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.rating === rating
                      ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                  {rating}+
                </button>
              ))}
            </div>
          </div>

          {/* Trust & Safety */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Trust & Safety
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.verified}
                  onChange={(e) => updateFilter('verified', e.target.checked)}
                  className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Verified buddies only</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.backgroundChecked}
                  onChange={(e) => updateFilter('backgroundChecked', e.target.checked)}
                  className="mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Background checked only</span>
              </label>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-sm text-gray-600">
              {totalBuddies} buddies found
            </span>
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="text-sm"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      )}

      {/* Results Count */}
      {!showAdvanced && (
        <div className="text-center text-sm text-gray-600">
          {totalBuddies} buddies available
        </div>
      )}
    </div>
  )
}

export default SearchFilters
