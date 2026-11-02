import React from 'react'
import { MoreHorizontal, TrendingUp } from 'lucide-react'

export const ProductSalesAnalyticsDonut = () => {
  const segments = [
    { label: 'Total Sales', percentage: 55, color: '#4385F5' },
    { label: 'Total Order', percentage: 25, color: '#FFBB54' },
    { label: 'Order Cancel', percentage: 20, color: '#FF764C' }
  ]

  const radius = 56
  const strokeWidth = 14
  const circumference = 2 * Math.PI * radius
  const totalArc = circumference * 0.88

  let currentOffset = 0
  const computedSegments = segments.map((seg) => {
    const length = (seg.percentage / 100) * totalArc
    const segOffset = currentOffset
    currentOffset += length
    return { ...seg, length, offset: segOffset }
  })

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
        <h3 className="text-[15px] font-bold text-[#1A1D2F]">
          Product Sales Analytics
        </h3>
        <button className="text-[#9AA0AC] hover:text-[#1A1D2F] p-1">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

            <div className="relative flex items-center justify-center my-4">
        <svg
          viewBox="0 0 160 160"
          className="w-40 h-40 -rotate-90 transform select-none"
        >
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#F4F6FB"
            strokeWidth={strokeWidth}
            strokeDasharray={`${totalArc} ${circumference}`}
            strokeLinecap="round"
          />

          {computedSegments.map((seg, idx) => (
            <circle
              key={idx}
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${seg.length - 4} ${circumference}`}
              strokeDashoffset={-seg.offset}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          ))}
        </svg>

                <div className="absolute w-9 h-9 rounded-full bg-[#EBF3FC] flex items-center justify-center pointer-events-none">
          <TrendingUp className="w-5 h-5 text-[#4385F5]" />
        </div>
      </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1">
        {segments.map((seg, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-[11px] font-medium text-[#64748B]">
              {seg.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
