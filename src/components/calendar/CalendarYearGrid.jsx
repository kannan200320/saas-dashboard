import React from 'react'

export const CalendarYearGrid = ({ onSelectMonth }) => {
  const months = [
    { name: 'January 2021', startOffset: 5, daysInMonth: 31 },
    { name: 'February 2021', startOffset: 1, daysInMonth: 28 },
    { name: 'March 2021', startOffset: 1, daysInMonth: 31 },
    { name: 'April 2021', startOffset: 4, daysInMonth: 30 },
    { name: 'May 2021', startOffset: 6, daysInMonth: 31 },
    { name: 'Jun 2021', startOffset: 2, daysInMonth: 30 },
    { name: 'July 2021', startOffset: 4, daysInMonth: 31 },
    { name: 'August 2021', startOffset: 0, daysInMonth: 31 },
    { name: 'September 2021', startOffset: 3, daysInMonth: 30 },
    { name: 'October 2021', startOffset: 5, daysInMonth: 31 },
    { name: 'November 2021', startOffset: 1, daysInMonth: 30 },
    { name: 'December 2021', startOffset: 3, daysInMonth: 31, activeDay: 2 }
  ]

  const weekdays = ['S', 'S', 'M', 'T', 'W', 'T', 'F']

  const getDaysArray = (month) => {
    const arr = []
    let currentDay = 1
    let prevDays = 28
    for (let i = 0; i < 35; i++) {
      if (i < month.startOffset) {
        arr.push({ day: prevDays + i, isCurrent: false })
      } else if (currentDay <= month.daysInMonth) {
        arr.push({
          day: currentDay,
          isCurrent: true,
          isActive: month.activeDay === currentDay
        })
        currentDay++
      } else {
        arr.push({ day: currentDay - month.daysInMonth, isCurrent: false })
        currentDay++
      }
    }
    return arr
  }

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {months.map((m) => {
          const days = getDaysArray(m)
          return (
            <div
              key={m.name}
              onClick={() => onSelectMonth && onSelectMonth(m.name)}
              className="space-y-3 p-3 rounded-xl hover:bg-gray-50/50 cursor-pointer transition-colors"
            >
              <h4 className="text-[13px] font-bold text-[#1A1D2F]">
                {m.name}
              </h4>

                            <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#8E95A9]">
                {weekdays.map((wd, i) => (
                  <span key={i} className="py-0.5">
                    {wd}
                  </span>
                ))}
              </div>

                            <div className="grid grid-cols-7 gap-y-1 text-center text-[11px]">
                {days.map((d, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-medium transition-all ${
                        d.isActive
                          ? 'bg-[#605BFF] text-white font-bold shadow-xs'
                          : d.isCurrent
                          ? 'text-[#1A1D2F]'
                          : 'text-gray-300'
                      }`}
                    >
                      {d.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
