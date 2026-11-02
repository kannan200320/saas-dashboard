import React from 'react'
import { Heart, Package, ShoppingBag, Briefcase } from 'lucide-react'

export const StatCard = ({ title, value, icon, iconBg, iconColor }) => {
  const renderIcon = () => {
    const props = { className: 'w-5 h-5', style: { color: iconColor } }
    switch (icon) {
      case 'heart':
        return <Heart {...props} fill={iconColor} />
      case 'box':
        return <Package {...props} />
      case 'bag':
        return <ShoppingBag {...props} fill={iconColor} />
      case 'briefcase':
        return <Briefcase {...props} fill={iconColor} />
      default:
        return <Heart {...props} />
    }
  }

  return (
    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#F2F4F8] shadow-xs hover:shadow-md transition-all duration-200">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        {renderIcon()}
      </div>
      <div className="flex flex-col">
        <span className="text-[22px] font-bold text-[#1A1D2F] tracking-tight leading-none mb-1">
          {value}
        </span>
        <span className="text-[13px] text-[#9AA0AC] font-medium leading-tight">
          {title}
        </span>
      </div>
    </div>
  )
}
