import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export const AddScheduleModal = ({
  isOpen,
  onClose,
  onSave,
  editingSchedule
}) => {
  const [formData, setFormData] = useState({
    date: '12 Dec, 2021',
    time: '10.15AM',
    location: 'Office Meeting'
  })

  useEffect(() => {
    if (editingSchedule) {
      setFormData({
        date: editingSchedule.date,
        time: editingSchedule.time,
        location: editingSchedule.location
      })
    } else {
      setFormData({
        date: '12 Dec, 2021',
        time: '10.15AM',
        location: 'Office Meeting'
      })
    }
  }, [editingSchedule, isOpen])

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.date.trim() || !formData.time.trim()) return

    onSave({
      id: editingSchedule ? editingSchedule.id : 's-' + Date.now(),
      ...formData,
      checked: editingSchedule ? editingSchedule.checked : false
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-[17px] font-bold text-[#1A1D2F]">
            {editingSchedule ? 'Edit Schedule' : 'Create Schedule'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Date
            </label>
            <input
              type="text"
              placeholder="e.g. 12 Dec, 2021"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Time
            </label>
            <input
              type="text"
              placeholder="e.g. 10.15AM"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Location
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
            >
              <option value="Office Meeting">Office Meeting</option>
              <option value="Home">Home</option>
              <option value="Friends Zone">Friends Zone</option>
              <option value="Meeting Outside">Meeting Outside</option>
              <option value="Friends">Friends</option>
            </select>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-[13px] font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-[13px] font-semibold text-white bg-[#605BFF] hover:bg-[#504BE8] rounded-xl shadow-xs transition-colors"
            >
              {editingSchedule ? 'Save Changes' : 'Create Schedule'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
