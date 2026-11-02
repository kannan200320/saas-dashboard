import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import defaultAvatar from '../../assets/images/avatar-1.png'

export const AddInvoiceModal = ({ isOpen, onClose, onSave, editingInvoice }) => {
  const [formData, setFormData] = useState({
    id: '#87' + Math.floor(1000 + Math.random() * 9000),
    name: '',
    email: '',
    date: '12 Dec, 2020',
    status: 'Complete'
  })

  useEffect(() => {
    if (editingInvoice) {
      setFormData({
        id: editingInvoice.id,
        name: editingInvoice.name,
        email: editingInvoice.email,
        date: editingInvoice.date,
        status: editingInvoice.status
      })
    } else {
      setFormData({
        id: '#87' + Math.floor(1000 + Math.random() * 9000),
        name: '',
        email: '',
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'Complete'
      })
    }
  }, [editingInvoice, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) return

    onSave({
      ...formData,
      avatar: editingInvoice ? editingInvoice.avatar : defaultAvatar,
      starred: editingInvoice ? editingInvoice.starred : false,
      checked: editingInvoice ? editingInvoice.checked : false
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-[17px] font-bold text-[#1A1D2F]">
            {editingInvoice ? 'Edit Invoice' : 'Add New Invoice'}
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
              Invoice ID
            </label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Arrora gaur"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. user@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Date
            </label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 text-[14px] bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF]"
            >
              <option value="Complete">Complete</option>
              <option value="Pending">Pending</option>
              <option value="Cancel">Cancel</option>
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
              {editingInvoice ? 'Save Changes' : 'Add Invoice'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
