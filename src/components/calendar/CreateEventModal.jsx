import React, { useState, useEffect } from 'react'
import { X, Clock, Users, MapPin, Calendar } from 'lucide-react'

export const CreateEventModal = ({ isOpen, onClose, onSave }) => {
  const [eventType, setEventType] = useState('Event')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSave = () => {
    if (onSave) onSave({ title: title || 'New Event', type: eventType })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between px-6 pt-5 pb-3">
          <h3 className="text-[17px] font-bold text-[#1A1D2F]">
            Create an Event
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#FEEAEA] flex items-center justify-center text-[#EB5757] hover:bg-[#FCD8D8] transition-colors"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

                <div className="px-6 py-3 space-y-4">
                    <div className="flex items-center gap-2">
            {['Event', 'Reminder', 'Task'].map((tab) => (
              <button
                key={tab}
                onClick={() => setEventType(tab)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  eventType === tab
                    ? 'bg-[#FF764C] text-white shadow-xs'
                    : 'text-[#8E95A9] hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

                    <div>
            <input
              type="text"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E9EDF5] rounded-xl text-[13px] text-[#1A1D2F] placeholder-[#9AA0AC] focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
            />
          </div>

                    <div className="flex items-start gap-3 pt-1">
            <div className="w-7 h-7 rounded-full bg-[#FFF4E6] flex items-center justify-center text-[#F2994A] shrink-0 mt-0.5">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-[12px]">
              <span className="font-semibold text-[#1A1D2F]">
                Thursday, December 5 &nbsp; 12:00pm - 1:00pm
              </span>
              <span className="text-[#8E95A9] text-[11px]">
                Time zone - Does not repeat
              </span>
              <button
                type="button"
                className="text-[#FF764C] font-semibold text-[11px] text-left mt-0.5 hover:underline"
              >
                Find a time
              </button>
            </div>
          </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[12px] font-semibold transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Add People</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-[#E2E8F0] hover:border-[#605BFF] text-[#605BFF] rounded-xl text-[12px] font-semibold transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Add location</span>
            </button>
          </div>

                    <div className="flex items-start gap-3 pt-2">
            <div className="w-7 h-7 rounded-full bg-[#FFF4E6] flex items-center justify-center text-[#F2994A] shrink-0 mt-0.5">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-[12px]">
              <span className="font-semibold text-[#1A1D2F]">John Deo</span>
              <span className="text-[#8E95A9] text-[11px]">
                Busy - Default visibility - notify 30 minutes before
              </span>
            </div>
          </div>
        </div>

                <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50/70 border-t border-gray-100 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-[13px] font-semibold text-[#605BFF] hover:bg-gray-100 rounded-xl transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 text-[13px] font-semibold text-white bg-[#605BFF] hover:bg-[#504BE8] rounded-xl shadow-xs transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
