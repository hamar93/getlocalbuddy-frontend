'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BookingCalendarProps {
  selectedTier: string
  tierConfig: {
    price: number
    duration: string
    type: 'hourly' | 'experience' | 'daily'
  }
  onDateTimeSelect: (date: Date, timeSlot: string, duration?: number) => void
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  selectedTier, 
  tierConfig, 
  onDateTimeSelect 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('')
  const [selectedDuration, setSelectedDuration] = useState<number>(2) // for hourly bookings

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay()) // Start from Sunday

    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 42; i++) { // 6 weeks * 7 days
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      
      const isCurrentMonth = date.getMonth() === month
      const isPast = date < today
      const isToday = date.getTime() === today.getTime()
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime()
      
      days.push({
        date,
        isCurrentMonth,
        isPast,
        isToday,
        isSelected,
        isAvailable: isCurrentMonth && !isPast // Mock availability
      })
    }

    return days
  }

  // Mock time slots - in real app this would come from buddy's availability
  const getTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour <= 20; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`
      const isAvailable = Math.random() > 0.3 // Mock 70% availability
      slots.push({ time, isAvailable })
    }
    return slots
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + direction)
    setCurrentDate(newDate)
  }

  const selectDate = (date: Date) => {
    if (date < new Date()) return
    setSelectedDate(date)
    setSelectedTimeSlot('')
  }

  const selectTimeSlot = (time: string) => {
    setSelectedTimeSlot(time)
  }

  const confirmBooking = () => {
    if (selectedDate && selectedTimeSlot) {
      const dateTime = new Date(selectedDate)
      const [hours, minutes] = selectedTimeSlot.split(':')
      dateTime.setHours(parseInt(hours), parseInt(minutes))
      
      onDateTimeSelect(dateTime, selectedTimeSlot, tierConfig.type === 'hourly' ? selectedDuration : undefined)
    }
  }

  const calendarDays = generateCalendarDays()
  const timeSlots = selectedDate ? getTimeSlots() : []

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-6">Select Date & Time</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <div>
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h4 className="text-lg font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h4>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => day.isAvailable && selectDate(day.date)}
                disabled={!day.isAvailable}
                className={`
                  aspect-square flex items-center justify-center text-sm rounded-lg transition-colors
                  ${!day.isCurrentMonth ? 'text-gray-300' : ''}
                  ${day.isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                  ${day.isToday ? 'bg-primary-100 text-primary-800 font-medium' : ''}
                  ${day.isSelected ? 'bg-primary-600 text-white' : ''}
                  ${day.isAvailable && !day.isSelected && !day.isToday ? 'hover:bg-gray-100' : ''}
                  ${!day.isAvailable ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <h4 className="text-lg font-medium mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Available Times
          </h4>
          
          {!selectedDate ? (
            <div className="text-center text-gray-500 py-8">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Select a date to see available times</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {timeSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => slot.isAvailable && selectTimeSlot(slot.time)}
                    disabled={!slot.isAvailable}
                    className={`
                      p-3 text-sm rounded-lg border transition-colors
                      ${selectedTimeSlot === slot.time ? 'bg-primary-600 text-white border-primary-600' : ''}
                      ${slot.isAvailable && selectedTimeSlot !== slot.time ? 'border-gray-200 hover:border-primary-300 hover:bg-primary-50' : ''}
                      ${!slot.isAvailable ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200' : 'cursor-pointer'}
                    `}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>

              {/* Duration Selector for Hourly Bookings */}
              {tierConfig.type === 'hourly' && selectedTimeSlot && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Duration (minimum 2 hours)
                  </label>
                  <div className="flex space-x-2">
                    {[2, 3, 4, 5, 6].map(hours => (
                      <button
                        key={hours}
                        onClick={() => setSelectedDuration(hours)}
                        className={`
                          px-4 py-2 text-sm rounded-lg border transition-colors
                          ${selectedDuration === hours ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-200 hover:border-primary-300'}
                        `}
                      >
                        {hours}h
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Summary */}
              {selectedTimeSlot && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h5 className="font-medium mb-2">Booking Summary</h5>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTimeSlot}</span>
                    </div>
                    {tierConfig.type === 'hourly' && (
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{selectedDuration} hours</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Experience:</span>
                      <span>{selectedTier}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-medium text-gray-900">
                        <span>Total:</span>
                        <span>
                          ${tierConfig.type === 'hourly' 
                            ? tierConfig.price * selectedDuration 
                            : tierConfig.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <Button
                onClick={confirmBooking}
                disabled={!selectedTimeSlot}
                className="w-full"
                variant="gradient"
                size="lg"
              >
                Continue to Payment
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingCalendar
