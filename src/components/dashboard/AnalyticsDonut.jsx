import React, { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'

export const AnalyticsDonut = () => {
  const [hoveredSegment, setHoveredSegment] = useState(null)
  const [showMenu, setShowMenu] = useState(false)

  const segments = [
    { id: 'sale', label: 'Sale', percentage: 55, color: '#4385F5', display: '55%' },
    { id: 'distribute', label: 'Distribute', percentage: 25, color: '#FFBB54', display: '25%' },
    { id: 'return', label: 'Return', percentage: 20, color: '#FF764C', display: '20%' }
  ]

  const radius = 64
  const strokeWidth = 18
  const circumference = 2 * Math.PI * radius
  const totalArc = circumference * 0.83

  let currentOffset = 0
  const computedSegments = segments.map((seg) => {
    const length = (seg.percentage / 100) * totalArc
    const segOffset = currentOffset
    currentOffset += length
    return {
      ...seg,
      length,
      offset: segOffset
    }
  })

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-bold text-[#1A1D2F]">Analytics</h3>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 rounded-lg text-[#9AA0AC] hover:text-[#1A1D2F] hover:bg-gray-50 transition-colors"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20 text-[13px]">
              <button
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-700"
              >
                View Report
              </button>
              <button
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-700"
              >
                Download PDF
              </button>
            </div>
          )}
        </div>
      </div>

            <div className="relative flex items-center justify-center my-2">
        <svg
          viewBox="0 0 180 180"
          className="w-48 h-48 -rotate-105 transform select-none transition-transform"
        >
                    <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#F4F6FB"
            strokeWidth={strokeWidth}
            strokeDasharray={`${totalArc} ${circumference}`}
            strokeLinecap="round"
          />

                    {computedSegments.map((seg) => {
            const isHovered = hoveredSegment === seg.id
            return (
              <circle
                key={seg.id}
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={isHovered ? strokeWidth + 3 : strokeWidth}
                strokeDasharray={`${seg.length - 4} ${circumference}`}
                strokeDashoffset={-seg.offset}
                strokeLinecap="round"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredSegment(seg.id)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            )
          })}
        </svg>

                <div className="absolute flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[28px] font-bold text-[#1A1D2F] leading-tight tracking-tight">
            {hoveredSegment
              ? segments.find((s) => s.id === hoveredSegment)?.display
              : '80%'}
          </span>
          <span className="text-[12px] font-medium text-[#9AA0AC] leading-tight">
            {hoveredSegment
              ? segments.find((s) => s.id === hoveredSegment)?.label
              : 'Transactions'}
          </span>
        </div>
      </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 pt-2">
        {segments.map((seg) => (
          <div
            key={seg.id}
            className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
            onMouseEnter={() => setHoveredSegment(seg.id)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-[13px] font-medium text-[#64748B]">
              {seg.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
