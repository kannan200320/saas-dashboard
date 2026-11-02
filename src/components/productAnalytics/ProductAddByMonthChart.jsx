import React from 'react'
import { productAddByMonth } from '../../data/productAnalyticsData'

export const ProductAddByMonthChart = () => {
  const maxVal = 32000

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex flex-col justify-between">
      <h3 className="text-[15px] font-bold text-[#1A1D2F] mb-4">
        Product Add by Month
      </h3>

      <div className="space-y-3 flex-1 justify-center flex flex-col">
        {productAddByMonth.map((item) => {
          const widthPercent = (item.value / maxVal) * 100
          return (
            <div key={item.month} className="flex items-center gap-3 text-[12px]">
              <span className="w-7 text-[#8E95A9] font-medium text-left">
                {item.month}
              </span>

                            <div className="flex-1 bg-transparent h-3.5 rounded-full overflow-hidden flex items-center">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${widthPercent}%`,
                    backgroundColor: item.color
                  }}
                />
              </div>

              <span className="w-14 text-right text-[#1A1D2F] font-semibold text-[11px]">
                {item.display}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
