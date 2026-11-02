import React, { useState } from 'react'
import { Camera, X } from 'lucide-react'
import defaultAvatar from '../../assets/images/avatar-johndeo.png'

export const AddCustomerDrawer = ({ isOpen, onClose, onAddCustomer }) => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Deo',
    email: 'Example@gmail.com',
    phone: '33757005467',
    gender: 'Male'
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddCustomer({
      id: 'c-' + Date.now(),
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      role: 'New Customer',
      email: formData.email,
      phone: '+' + formData.phone,
      gender: formData.gender,
      avatar: defaultAvatar,
      contactInfo: {
        email: formData.email,
        phone: formData.phone,
        address: '2239 Hog Camp Road Schaumburg'
      },
      performance: {
        months: [
          { month: 'Jan', value: 1.2 },
          { month: 'Feb', value: 2.33, isHighlight: true, display: '2.33k' },
          { month: 'Mar', value: 1.5 },
          { month: 'Apr', value: 1.8 },
          { month: 'May', value: 2.1 },
          { month: 'Jun', value: 2.4 }
        ],
        progress1: 70,
        progress2: 60
      }
    })
    onClose()
  }

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-bold text-[#1A1D2F]">Add Customer</h3>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-[#FEEAEA] flex items-center justify-center text-[#EB5757] hover:bg-[#FCD8D8] transition-colors"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-center py-2">
          <div className="relative group cursor-pointer" title="Upload or change photo">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#F2F3FE] shadow-2xs">
              <img
                src={defaultAvatar}
                alt="New Customer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#605BFF] text-white flex items-center justify-center shadow-xs ring-2 ring-white">
              <Camera className="w-4 h-4" />
            </div>
          </div>
        </div>

                <div>
          <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full px-3 py-2 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
            required
          />
        </div>

                <div>
          <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full px-3 py-2 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
            required
          />
        </div>

                <div>
          <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-3 py-2 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
            required
          />
        </div>

                <div>
          <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
            Phone Number
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-3 py-2 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
            required
          />
        </div>

                <div>
          <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            className="w-full px-3 py-2 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

                <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  )
}
