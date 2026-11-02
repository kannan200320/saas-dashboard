import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const CalendarMonthGrid = ({ onOpenCreateModal }) => {
  const daysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const calendarWeeks = [
    {
      days: [
        { num: '29', isCurrent: false, events: [] },
        { num: '30', isCurrent: false, events: [] },
        { num: '01', isCurrent: true, events: [] },
        {
          num: '02',
          isCurrent: true,
          isHighlightDay: true,
          events: [
            { text: 'Free day', bg: 'bg-[#29B6F6]', color: 'text-white' },
            { text: 'Party Time', bg: 'bg-[#D925F9]', color: 'text-white' },
            { text: 'More', isMore: true }
          ]
        },
        { num: '03', isCurrent: true, events: [] },
        { num: '04', isCurrent: true, events: [] },
        { num: '05', isCurrent: true, events: [] }
      ]
    },
    {
      days: [
        { num: '06', isCurrent: true, events: [] },
        { num: '07', isCurrent: true, events: [] },
        { num: '08', isCurrent: true, events: [] },
        { num: '09', isCurrent: true, events: [] },
        { num: '10', isCurrent: true, events: [] },
        { num: '11', isCurrent: true, events: [] },
        { num: '12', isCurrent: true, events: [] }
      ]
    },
    {
      days: [
        { num: '13', isCurrent: true, events: [] },
        { num: '14', isCurrent: true, events: [] },
        { num: '15', isCurrent: true, events: [] },
        {
          num: '16',
          isCurrent: true,
          events: [
            { text: 'Victory day', bg: 'bg-[#FF764C]', color: 'text-white' }
          ]
        },
        { num: '17', isCurrent: true, events: [] },
        { num: '18', isCurrent: true, events: [] },
        { num: '19', isCurrent: true, events: [] }
      ]
    },
    {
      days: [
        { num: '20', isCurrent: true, events: [] },
        {
          num: '21',
          isCurrent: true,
          events: [
            {
              text: 'Invited by friends',
              bg: 'bg-[#D925F9]',
              color: 'text-white'
            }
          ]
        },
        { num: '22', isCurrent: true, events: [] },
        { num: '23', isCurrent: true, events: [] },
        { num: '24', isCurrent: true, events: [] },
        {
          num: '25',
          isCurrent: true,
          events: [
            { text: 'Christmas Day', bg: 'bg-[#29B6F6]', color: 'text-white' }
          ]
        },
        { num: '26', isCurrent: true, events: [] }
      ]
    },
    {
      days: [
        { num: '27', isCurrent: true, events: [] },
        { num: '28', isCurrent: true, events: [] },
        { num: '29', isCurrent: true, events: [] },
        { num: '30', isCurrent: true, events: [] },
        { num: '31', isCurrent: true, events: [] },
        { num: '01', isCurrent: false, events: [] },
        { num: '02', isCurrent: false, events: [] }
      ]
    }
  ]

  return (
    <div className="bg-white rounded-3xl border border-[#F2F4F8] p-6 sm:p-8 shadow-xs flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-2">
        <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1A1D2F]">
          December 2, 2021
        </h3>
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenCreateModal}
            className="p-1 rounded-lg text-[#8E95A9] hover:text-[#1A1D2F] hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenCreateModal}
            className="p-1 rounded-lg text-[#8E95A9] hover:text-[#1A1D2F] hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="min-w-[560px] sm:min-w-0">
            <div className="grid grid-cols-7 border-b border-[#F0F1F6] pb-3 text-[13px] font-semibold text-[#1A1D2F] text-center">
        {daysHeader.map((d, i) => (
          <div key={i} className="relative py-1">
            <span>{d}</span>
            {d === 'Wed' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#FF764C] rounded-full" />
            )}
          </div>
        ))}
      </div>

            <div className="divide-y divide-[#F0F1F6] flex-1 flex flex-col">
        {calendarWeeks.map((week, wIdx) => (
          <div
            key={wIdx}
            className="grid grid-cols-7 flex-1 min-h-[110px] sm:min-h-[130px] py-3"
          >
            {week.days.map((day, dIdx) => (
              <div
                key={dIdx}
                onClick={onOpenCreateModal}
                className="flex flex-col items-center justify-start px-1 cursor-pointer hover:bg-gray-50/50 rounded-xl transition-colors group"
              >
                                <div className="mb-2">
                  <span
                    className={`text-[20px] sm:text-[24px] tracking-tight transition-colors ${
                      day.isHighlightDay
                        ? 'text-[#FF764C] font-semibold'
                        : day.isCurrent
                        ? 'text-[#1A1D2F] font-normal group-hover:text-[#605BFF]'
                        : 'text-[#C4C9D3] font-normal'
                    }`}
                  >
                    {day.num}
                  </span>
                </div>

                                <div className="w-full space-y-1.5 flex flex-col items-center">
                  {day.events &&
                    day.events.map((ev, eIdx) =>
                      ev.isMore ? (
                        <div
                          key={eIdx}
                          className="w-full max-w-[110px] py-0.5 px-3 rounded-md text-[11px] font-semibold text-[#29B6F6] border border-[#29B6F6]/40 text-center bg-white shadow-2xs hover:bg-blue-50/50 transition-colors"
                        >
                          More
                        </div>
                      ) : (
                        <div
                          key={eIdx}
                          className={`w-full max-w-[124px] py-1 px-3 rounded-md text-[11px] font-semibold text-center truncate shadow-2xs ${ev.bg} ${ev.color}`}
                        >
                          {ev.text}
                        </div>
                      )
                    )}
                </div>
              </div>
            ))}
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  )
}
