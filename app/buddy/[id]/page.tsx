import BuddyProfile from '@/components/BuddyProfile'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Mock data for testing
const mockBuddy = {
  id: '1',
  name: 'Zoltán',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  city: 'Budapest',
  country: 'Hungary',
  rating: 4.9,
  reviewCount: 127,
  responseTime: 15,
  languages: ['English', 'Hungarian', 'German'],
  bio: 'Hey there! I\'m Zoltán, born and raised in Budapest. I love showing visitors the real Budapest - not just the tourist spots, but the places where locals actually hang out. I\'m a software engineer by day and a passionate foodie by night. My apartment is in the heart of the city and I love having people over for traditional Hungarian dinners!',
  verified: true,
  backgroundChecked: true,
  specialties: ['Ruin Bars', 'Thermal Baths', 'Food Scene', 'Night Life', 'Architecture'],
  tiers: {
    cityTour: {
      available: true,
      hourlyRate: 25,
      description: 'I\'ll show you the best of Budapest - from the iconic Parliament and Castle to hidden ruin bars and local markets. We\'ll use public transport like a local and I\'ll share stories about Hungarian culture and history.'
    },
    homeExperience: {
      available: true,
      priceRange: [45, 60] as [number, number],
      experiences: ['Hungarian Cooking', 'Wine Tasting', 'Home Dinner', 'Local Party']
    },
    vipLocalLife: {
      available: true,
      dailyRate: 150,
      description: 'Spend a full day living like a local Budapester. We\'ll start with coffee at my favorite café, visit some non-touristy neighborhoods, have lunch with my friends, and end with a traditional dinner at my place. You\'ll get to see how locals really live!'
    }
  }
}

export default function BuddyProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <BuddyProfile />
        </div>
      </main>
      <Footer />
    </div>
  )
}
