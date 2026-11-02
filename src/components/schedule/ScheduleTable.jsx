import React from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Pencil,
  Trash2,
  Check,
  ChevronDown
} from 'lucide-react'

export const ScheduleTable = ({
  schedules,
  onToggleCheck,
  onToggleSelectAll,
  onEditSchedule,
  onDeleteSchedule,
  onSort,
  allChecked
}) => {
  return (
    <div className="w-full space-y-2">
            <div className="hidden md:grid grid-cols-12 items-center px-6 py-2 text-[11px] font-semibold text-[#8E95A9]">
                <div className="col-span-1 flex items-center">
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
          onClick={() => onSort('date')}
          className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Date</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div
          onClick={() => onSort('time')}
          className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Time</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div
          onClick={() => onSort('location')}
          className="col-span-3 flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F] transition-colors"
        >
          <span>Location</span>
          <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
        </div>

                <div className="col-span-2 text-right">
          <span>Action</span>
        </div>
      </div>

            <div className="space-y-2.5">
        {schedules.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 md:grid-cols-12 items-center px-4 md:px-6 py-3 bg-white rounded-2xl border transition-all ${
              item.checked
                ? 'border-[#605BFF]/30 shadow-xs ring-1 ring-[#605BFF]/10'
                : 'border-[#F2F4F8] hover:border-gray-200 shadow-2xs'
            }`}
          >
                        <div className="col-span-1 flex items-center mb-2 md:mb-0">
              <button
                onClick={() => onToggleCheck(item.id)}
                className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                  item.checked
                    ? 'bg-[#605BFF] border-[#605BFF] text-white'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                {item.checked && <Check className="w-3 h-3 stroke-[3]" />}
              </button>
            </div>

                        <div className="col-span-3 flex items-center gap-2.5 mb-2 md:mb-0">
              <Calendar className="w-4 h-4 text-[#3B82F6] shrink-0" />
              <span className="text-[13px] font-medium text-[#1A1D2F]">
                {item.date}
              </span>
            </div>

                        <div className="col-span-3 flex items-center gap-2.5 mb-2 md:mb-0">
              <Clock className="w-4 h-4 text-[#8E95A9] shrink-0" />
              <span className="text-[13px] font-medium text-[#1A1D2F]">
                {item.time}
              </span>
            </div>

                        <div className="col-span-3 flex items-center mb-2 md:mb-0">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#ECEEFE] text-[#605BFF] text-[12px] font-semibold whitespace-nowrap shadow-2xs">
                <MapPin className="w-3.5 h-3.5 fill-[#605BFF] text-[#605BFF] shrink-0" />
                <span>{item.location}</span>
              </div>
            </div>

                        <div className="col-span-2 flex items-center justify-end gap-2">
                            <button
                onClick={() => onEditSchedule(item)}
                title="Edit schedule"
                className="p-1.5 rounded-lg text-[#F59E0B] hover:bg-amber-50 hover:text-[#D97706] transition-colors"
              >
                <Pencil className="w-4 h-4" />
              </button>

                            <button
                onClick={() => onDeleteSchedule(item.id)}
                title="Delete schedule"
                className="p-1.5 rounded-lg text-[#EF4444] hover:bg-red-50 hover:text-[#DC2626] transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {schedules.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-[14px]">No schedules scheduled.</p>
          </div>
        )}
      </div>
    </div>
  )
}
