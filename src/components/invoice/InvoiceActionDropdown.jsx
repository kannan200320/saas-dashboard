import React, { useEffect, useRef } from 'react'
import { Pencil, Trash2 } from 'lucide-react'

export const InvoiceActionDropdown = ({ onEdit, onDelete, onClose }) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-8 z-30 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 transition-all animate-in fade-in zoom-in-95 duration-150"
    >
            <button
        onClick={() => {
          onEdit()
          onClose()
        }}
        className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[12px] font-medium text-[#3B82F6] hover:bg-blue-50/60 transition-colors"
      >
        <Pencil className="w-3.5 h-3.5 text-[#3B82F6]" />
        <span>Edit</span>
      </button>

            <button
        onClick={() => {
          onDelete()
          onClose()
        }}
        className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[12px] font-medium text-[#EF4444] hover:bg-red-50/70 transition-colors"
      >
        <Trash2 className="w-3.5 h-3.5 text-[#EF4444]" />
        <span>Delete</span>
      </button>
    </div>
  )
}
