'use client'

import FeedPost from '@/components/LocalFeed/FeedPost'

// Mock adat teszteléshez
const mockPost = {
  id: '1',
  buddyId: 'buddy-1',
  buddyName: 'Zoltán',
  buddyAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  buddyRating: 4.8,
  content: '🍕 Tomorrow 7PM - Secret pizza tour in Buda hills! Discover the best hidden pizzerias that only locals know. We\'ll visit 3 authentic spots and share stories about Budapest\'s food culture. Only 3 spots left! 🔥',
  experienceType: 'food' as const,
  availableSpots: 3,
  price: 35,
  datetime: new Date('2025-07-13T19:00:00'),
  location: 'Buda Hills, Budapest',
  tags: ['pizza', 'hidden-gems', 'local-food'],
  likes: 12,
  bookings: 7,
  isUrgent: true,
  createdAt: new Date('2025-07-12T14:30:00'),
  images: [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop'
  ]
}

export default function FeedTestPage() {
  const handleLike = (id: string) => {
    console.log('❤️ Liked post:', id)
  }

  const handleBook = (id: string) => {
    console.log('📅 Booked post:', id)
  }

  const handleShare = (id: string) => {
    console.log('📤 Shared post:', id)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">🔥 FeedPost Component Test</h1>
        <FeedPost 
          post={mockPost}
          onLike={handleLike}
          onBook={handleBook}
          onShare={handleShare}
        />
      </div>
    </div>
  )
}