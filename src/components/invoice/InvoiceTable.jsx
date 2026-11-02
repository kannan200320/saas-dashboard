import React, { useState } from 'react'
import {
  Check,
  Calendar,
  Star,
  MoreHorizontal,
  ChevronDown,
  Trash2
} from 'lucide-react'
import { InvoiceActionDropdown } from './InvoiceActionDropdown'

export const InvoiceTable = ({
  invoices,
  onToggleCheck,
  onToggleSelectAll,
  onToggleStar,
  onDeleteInvoice,
  onEditInvoice,
  onBulkDelete,
  onSort,
  allChecked
}) => {
  const [activeMenuId, setActiveMenuId] = useState(null)

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Complete':
        return 'bg-[#EAF7EE] text-[#2E9A4B]'
      case 'Pending':
        return 'bg-[#FFF4EB] text-[#E67E22]'
      case 'Cancel':
        return 'bg-[#FEECEC] text-[#EB5757]'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="w-full space-y-2">
            <div className="hidden lg:grid grid-cols-12 items-center px-6 py-2 text-[11px] font-semibold text-[#8E95A9]">
                <div className="col-span-1 flex items-center gap-3">
          <button
            onClick={onToggleSelectAll}
            className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
              allChecked
                ? 'bg-[#605BFF] border-[#605BFF] text-white'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            {allChecked && <Check className="w-3 h-3 stroke-[3]" />}
          </button>
        </div>

                <div
          onClick={() => onSort('id')}
          className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Invoice Id</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div
          onClick={() => onSort('name')}
          className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Name</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div
          onClick={() => onSort('email')}
          className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Email</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div
          onClick={() => onSort('date')}
          className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Date</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div
          onClick={() => onSort('status')}
          className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Status</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div className="col-span-1 flex items-center justify-end">
          <button
            onClick={onBulkDelete}
            title="Delete selected invoices"
            className="p-1 text-[#8E95A9] hover:text-[#EF4444] transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

            <div className="space-y-2.5">
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className={`grid grid-cols-1 lg:grid-cols-12 items-center px-4 lg:px-6 py-3.5 bg-white rounded-2xl border transition-all ${
              inv.checked
                ? 'border-[#605BFF]/30 shadow-xs ring-1 ring-[#605BFF]/10'
                : 'border-[#F2F4F8] hover:border-gray-200 shadow-2xs'
            }`}
          >
                        <div className="col-span-1 flex items-center justify-between lg:justify-start gap-3 mb-2 lg:mb-0">
              <button
                onClick={() => onToggleCheck(inv.id)}
                className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                  inv.checked
                    ? 'bg-[#605BFF] border-[#605BFF] text-white'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                {inv.checked && <Check className="w-3 h-3 stroke-[3]" />}
              </button>

              <span className="lg:hidden text-[12px] font-bold text-[#1A1D2F]">
                {inv.id}
              </span>
            </div>

                        <div className="hidden lg:block col-span-2 text-[13px] font-semibold text-[#1A1D2F]">
              {inv.id}
            </div>

                        <div className="col-span-2 flex items-center gap-2.5 mb-2 lg:mb-0">
              <div className="w-[26px] h-[26px] rounded-full overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={inv.avatar}
                  alt={inv.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[13px] font-medium text-[#1A1D2F] truncate">
                {inv.name}
              </span>
            </div>

                        <div className="col-span-2 flex items-center gap-2 mb-2 lg:mb-0">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#10B981] text-white shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span className="text-[13px] text-[#64748B] truncate">
                {inv.email}
              </span>
            </div>

                        <div className="col-span-2 flex items-center gap-2 mb-2 lg:mb-0">
              <Calendar className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
              <span className="text-[13px] text-[#64748B] whitespace-nowrap">
                {inv.date}
              </span>
            </div>

                        <div className="col-span-2 flex items-center mb-2 lg:mb-0">
              <span
                className={`w-full max-w-[126px] py-1.5 px-4 rounded-full text-[12px] font-bold text-center inline-flex items-center justify-center whitespace-nowrap shadow-2xs ${getStatusBadge(
                  inv.status
                )}`}
              >
                {inv.status}
              </span>
            </div>

                        <div className="col-span-1 flex items-center justify-end gap-3 relative">
                            <button
                onClick={() => onToggleStar(inv.id)}
                className="p-1 transition-transform active:scale-120"
                title={inv.starred ? 'Starred' : 'Star this invoice'}
              >
                <Star
                  className={`w-4 h-4 transition-colors ${
                    inv.starred
                      ? 'fill-[#FFB800] text-[#FFB800]'
                      : 'text-gray-300 hover:text-gray-400'
                  }`}
                />
              </button>

                            <div className="relative">
                <button
                  onClick={() =>
                    setActiveMenuId(activeMenuId === inv.id ? null : inv.id)
                  }
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                                {activeMenuId === inv.id && (
                  <InvoiceActionDropdown
                    onEdit={() => onEditInvoice(inv)}
                    onDelete={() => onDeleteInvoice(inv.id)}
                    onClose={() => setActiveMenuId(null)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {invoices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-[14px]">No invoices found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
