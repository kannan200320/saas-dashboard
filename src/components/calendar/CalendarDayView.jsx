import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const CalendarDayView = ({ onSelectEvent }) => {
  const timeSlots = [
    { time: '09.00 AM', event: { title: 'Invited by friends', bg: 'bg-[#FF764C]', offset: 'left-[10%] w-36' } },
    { time: '10.00 AM' },
    { time: '11.00 AM' },
    { time: '12.00 PM', event: { title: 'Prayer Time', bg: 'bg-[#00C5FF]', offset: 'left-[45%] w-32' } },
    { time: '01.00 PM' },
    { time: '02.00 PM', event: { title: 'Lunch Time', bg: 'bg-[#FF764C]', offset: 'left-[70%] w-32' } },
    { time: '03.00 PM' },
    { time: '04.00 PM' },
    { time: '05.00 PM' },
    { time: '06.00 PM', event: { title: 'Prayer Time', bg: 'bg-[#22C55E]', offset: 'left-[35%] w-32' } },
    { time: '07.00 PM' },
    { time: '08.00 PM' },
    { time: '09.00 PM', event: { title: 'Dinner Time', bg: 'bg-[#605BFF]', offset: 'left-[60%] w-32' } },
    { time: '10.00 PM' },
    { time: '11.00 PM' },
    { time: '12.00 AM' },
    { time: '01.00 AM' }
  ]

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex-1 flex flex-col overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-between mb-6">
        <h3 className="text-[14px] font-bold text-[#1A1D2F]">
          December 2, 2021
        </h3>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

            <div className="relative divide-y divide-gray-100 flex-1 min-w-[500px]">
        {timeSlots.map((slot, idx) => (
          <div key={idx} className="h-12 flex items-center relative group">
            <span className="text-[11px] text-[#8E95A9] font-medium w-20 shrink-0">
              {slot.time}
            </span>
            <div className="flex-1 h-px bg-gray-100 group-hover:bg-gray-200 transition-colors" />

                        {slot.event && (
              <div
                onClick={() => onSelectEvent && onSelectEvent(slot.event)}
                className={`absolute top-1.5 py-1.5 px-4 rounded-xl text-white text-[11px] font-semibold shadow-xs flex items-center justify-center cursor-pointer transition-transform hover:scale-102 ${slot.event.bg} ${slot.event.offset}`}
              >
                {slot.event.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
