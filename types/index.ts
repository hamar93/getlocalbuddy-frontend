// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  verified: boolean
  createdAt: Date
  updatedAt: Date
  type: 'traveler' | 'buddy' | 'admin'
}

export interface BuddyProfile extends User {
  type: 'buddy'
  cityId: string
  bio: string
  languages: string[]
  hourlyRate: number
  availability: TimeSlot[]
  rating: number
  reviewCount: number
  responseTime: number // in minutes
  specialties: string[]
  verified: boolean
  backgroundCheck: boolean
}

export interface TravelerProfile extends User {
  type: 'traveler'
  preferences: {
    interests: string[]
    budgetRange: [number, number]
    languages: string[]
  }
}

// City Types
export interface City {
  id: string
  name: string
  country: string
  countryCode: string
  description: string
  image: string
  buddyCount: number
  averagePrice: number
  popular: boolean
  coordinates: {
    lat: number
    lng: number
  }
}

// Booking Types
export interface TimeSlot {
  start: Date
  end: Date
  available: boolean
}

export interface Booking {
  id: string
  travelerId: string
  buddyId: string
  cityId: string
  startTime: Date
  endTime: Date
  duration: number // in hours
  totalPrice: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  specialRequests?: string
  meetingPoint?: string
  createdAt: Date
  updatedAt: Date
}

// Review Types
export interface Review {
  id: string
  bookingId: string
  reviewerId: string
  revieweeId: string
  rating: number
  comment: string
  createdAt: Date
  type: 'buddy_to_traveler' | 'traveler_to_buddy'
}

// Chat Types
export interface ChatMessage {
  id: string
  bookingId: string
  senderId: string
  receiverId: string
  message: string
  timestamp: Date
  read: boolean
  type: 'text' | 'image' | 'location'
}

export interface ChatRoom {
  id: string
  bookingId: string
  participants: string[]
  lastMessage?: ChatMessage
  unreadCount: number
  createdAt: Date
}

// Payment Types
export interface Payment {
  id: string
  bookingId: string
  amount: number
  currency: string
  status: 'pending' | 'succeeded' | 'failed' | 'refunded'
  stripePaymentIntentId: string
  createdAt: Date
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Form Types
export interface SearchFilters {
  cityId?: string
  date?: Date
  duration?: number
  priceRange?: [number, number]
  languages?: string[]
  rating?: number
  specialties?: string[]
}

export interface BookingRequest {
  buddyId: string
  startTime: Date
  duration: number
  specialRequests?: string
  totalPrice: number
}

// Utility Types
export type Locale = 'en' | 'hu' | 'de' | 'fr' | 'es' | 'it'

export interface Language {
  code: Locale
  name: string
  flag: string
}

export interface NavigationItem {
  name: string
  href: string
  current?: boolean
}
