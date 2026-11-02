import React, { useState } from 'react'
import { ChevronDown, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'

export const CustomerTable = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
  onEditCustomer,
  onDeleteCustomer,
  onSort
}) => {
  const [activeMenuId, setActiveMenuId] = useState(null)

  return (
    <div className="w-full space-y-2">
            <div className="hidden md:grid grid-cols-12 items-center px-6 py-2 text-[11px] font-semibold text-[#8E95A9]">
        <div
          onClick={() => onSort('name')}
          className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Name</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

        <div
          onClick={() => onSort('email')}
          className="col-span-4 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Email</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

        <div
          onClick={() => onSort('phone')}
          className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Phone number</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

        <div
          onClick={() => onSort('gender')}
          className="col-span-1 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Gender</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

        <div className="col-span-1 text-right">
          <span>Action</span>
        </div>
      </div>

            <div className="space-y-2.5">
        {customers.map((c) => {
          const isSelected = selectedCustomerId === c.id
          return (
            <div
              key={c.id}
              onClick={() => onSelectCustomer(c.id)}
              className={`grid grid-cols-1 md:grid-cols-12 items-center px-4 md:px-6 py-3 bg-white rounded-2xl border cursor-pointer transition-all ${
                isSelected
                  ? 'border-[#605BFF]/30 ring-1 ring-[#605BFF]/15 shadow-xs'
                  : 'border-[#F2F4F8] hover:border-gray-200 shadow-2xs'
              }`}
            >
                            <div className="col-span-3 flex items-center gap-3 mb-2 md:mb-0">
                <div className="w-[28px] h-[28px] rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[13px] font-semibold text-[#1A1D2F] truncate">
                  {c.name}
                </span>
              </div>

                            <div className="col-span-4 text-[13px] text-[#64748B] truncate mb-2 md:mb-0">
                {c.email}
              </div>

                            <div className="col-span-3 text-[13px] text-[#64748B] whitespace-nowrap mb-2 md:mb-0">
                {c.phone}
              </div>

                            <div className="col-span-1 flex items-center mb-2 md:mb-0">
                <span
                  className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold ${
                    c.gender === 'Female'
                      ? 'bg-[#FEEFEA] text-[#FF764C]'
                      : 'bg-[#E8F1FD] text-[#4385F5]'
                  }`}
                >
                  {c.gender}
                </span>
              </div>

                            <div
                className="col-span-1 flex items-center justify-end relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() =>
                    setActiveMenuId(activeMenuId === c.id ? null : c.id)
                  }
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {activeMenuId === c.id && (
                  <div className="absolute right-0 top-8 z-30 w-28 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      onClick={() => {
                        onEditCustomer(c)
                        setActiveMenuId(null)
                      }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-[12px] font-medium text-[#3B82F6] hover:bg-blue-50/60 transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        onDeleteCustomer(c.id)
                        setActiveMenuId(null)
                      }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-[12px] font-medium text-[#EF4444] hover:bg-red-50/70 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
