import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const MiniCalendar = ({ selectedDate, onSelectDate }) => {
  const [selectedDay, setSelectedDay] = useState(3)
  const weekdays = ['S', 'S', 'M', 'T', 'W', 'T', 'F']

  const calendarDays = [
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false }
  ]

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
        <h4 className="text-[13px] font-bold text-[#1A1D2F]">
          December 2, 2021
        </h4>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

            <div className="grid grid-cols-7 text-center mb-2">
        {weekdays.map((wd, idx) => (
          <span
            key={idx}
            className="text-[11px] font-semibold text-[#8E95A9] py-1"
          >
            {wd}
          </span>
        ))}
      </div>

            <div className="grid grid-cols-7 gap-y-1.5 text-center text-[12px]">
        {calendarDays.map((item, idx) => {
          const isSelected = item.isCurrentMonth && item.day === selectedDay
          return (
            <div key={idx} className="flex items-center justify-center">
              <button
                onClick={() => {
                  if (item.isCurrentMonth) {
                    setSelectedDay(item.day)
                    if (onSelectDate) onSelectDate(item.day)
                  }
                }}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-medium transition-all ${
                  isSelected
                    ? 'bg-[#605BFF] text-white shadow-xs shadow-[#605BFF]/40 font-semibold'
                    : item.isCurrentMonth
                    ? 'text-[#1A1D2F] hover:bg-gray-100'
                    : 'text-gray-300'
                }`}
              >
                {item.day}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
