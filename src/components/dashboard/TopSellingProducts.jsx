import React, { useState } from 'react'
import { MoreHorizontal, Star } from 'lucide-react'
import { topSellingProductsData } from '../../data/dashboardData'

export const TopSellingProducts = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-bold text-[#1A1D2F]">
          Top selling Products
        </h3>
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
                View Analytics
              </button>
              <button
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-700"
              >
                Manage Stock
              </button>
            </div>
          )}
        </div>
      </div>

            <div className="space-y-4">
        {topSellingProductsData.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 group cursor-pointer"
          >
                        <div className="w-[68px] h-[68px] rounded-2xl overflow-hidden bg-[#EBF3FC] flex items-center justify-center shrink-0 border border-[#DEEBFA] p-1.5 transition-transform duration-200 group-hover:scale-102">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

                        <div className="flex flex-col justify-center">
              <h4 className="text-[14px] font-semibold text-[#1A1D2F] mb-1 leading-snug">
                {product.name}
              </h4>

                            <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]"
                  />
                ))}
              </div>

                            <span className="text-[15px] font-bold text-[#1A1D2F]">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
