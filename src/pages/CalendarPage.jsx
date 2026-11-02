import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { MiniCalendar } from '../components/schedule/MiniCalendar'
import { PeopleList } from '../components/schedule/PeopleList'
import { CalendarDayView } from '../components/calendar/CalendarDayView'
import { CalendarMonthGrid } from '../components/calendar/CalendarMonthGrid'
import { CalendarYearGrid } from '../components/calendar/CalendarYearGrid'
import { CreateEventModal } from '../components/calendar/CreateEventModal'
import { AddScheduleModal } from '../components/schedule/AddScheduleModal'

export const CalendarPage = ({
  initialViewMode = 'Month',
  initialEventModalOpen = false
}) => {
  const [viewMode, setViewMode] = useState(initialViewMode)
  const [isEventModalOpen, setIsEventModalOpen] = useState(initialEventModalOpen)
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const [selectedPersonId, setSelectedPersonId] = useState(null)

  return (
    <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
          Calendar
        </h1>

        <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-2xl shadow-2xs">
            {['Day', 'Week', 'Month', 'Year'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-1.5 rounded-xl text-[12px] font-semibold transition-all ${
                  viewMode === mode
                    ? 'bg-[#605BFF] text-white shadow-xs'
                    : 'text-[#8E95A9] hover:text-[#1A1D2F]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsEventModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[12px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Create Event</span>
          </button>
        </div>
      </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className="w-full lg:w-[280px] shrink-0 space-y-4">
          <button
            onClick={() => setIsScheduleModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-2xl text-[14px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Create Schedule</span>
          </button>

          <MiniCalendar onSelectDate={(d) => console.log('Selected date:', d)} />

          <PeopleList
            selectedPersonId={selectedPersonId}
            onSelectPerson={(id) =>
              setSelectedPersonId(selectedPersonId === id ? null : id)
            }
          />

          <button
            onClick={() => alert('Filter set to My Schedule')}
            className="w-full py-2.5 px-4 bg-white border border-[#E2E8F0] hover:border-[#605BFF]/30 text-[#605BFF] hover:bg-gray-50/80 rounded-2xl text-[13px] font-semibold shadow-2xs transition-colors"
          >
            My Schedule
          </button>
        </div>

                <div className="flex-1 w-full min-w-0">
          {viewMode === 'Day' ? (
            <CalendarDayView onSelectEvent={() => setIsEventModalOpen(true)} />
          ) : viewMode === 'Year' ? (
            <CalendarYearGrid onSelectMonth={() => setViewMode('Month')} />
          ) : (
            <CalendarMonthGrid onOpenCreateModal={() => setIsEventModalOpen(true)} />
          )}
        </div>
      </div>

            <CreateEventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        onSave={(ev) => console.log('Saved event:', ev)}
      />

            <AddScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onSave={(s) => console.log('Saved schedule:', s)}
      />
    </div>
  )
}
