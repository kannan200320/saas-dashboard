import React from 'react'
import { Package, ShoppingCart } from 'lucide-react'

export const ProductSparkCard = ({
  title,
  value,
  badge,
  icon,
  iconBg,
  waveColor
}) => {
  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] shadow-xs overflow-hidden relative flex flex-col justify-between pt-5 pb-0">
      <div className="px-5 flex items-start justify-between">
        <div className="flex items-center gap-3.5">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: iconBg }}
          >
            {icon === 'cart' ? (
              <ShoppingCart className="w-5 h-5 text-[#FFBB54]" />
            ) : (
              <Package className="w-5 h-5 text-[#4385F5]" />
            )}
          </div>
          <div>
            <span className="text-[12px] text-[#8E95A9] font-medium block">
              {title}
            </span>
            <span className="text-[24px] font-bold text-[#1A1D2F] tracking-tight leading-tight">
              {value}
            </span>
          </div>
        </div>

                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F8EE] text-[#27AE60] whitespace-nowrap">
          {badge}
        </span>
      </div>

            <div className="w-full mt-3 h-14 relative select-none">
        <svg
          viewBox="0 0 300 70"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id={`sparkGrad-${waveColor}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={waveColor} stopOpacity="0.15" />
              <stop offset="100%" stopColor={waveColor} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 45 C 50 48, 80 15, 130 35 C 180 55, 230 10, 300 25 L 300 70 L 0 70 Z"
            fill={`url(#sparkGrad-${waveColor})`}
          />
          <path
            d="M 0 45 C 50 48, 80 15, 130 35 C 180 55, 230 10, 300 25"
            fill="none"
            stroke={waveColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
