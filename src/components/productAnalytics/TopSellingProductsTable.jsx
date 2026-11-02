import React from 'react'
import { ChevronDown } from 'lucide-react'
import { productTopSellingList } from '../../data/productAnalyticsData'

export const TopSellingProductsTable = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-[#1A1D2F]">
          Top Selling Products
        </h3>
        <button className="text-[12px] font-semibold text-[#605BFF] hover:underline">
          See More
        </button>
      </div>

            <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-transparent text-[11px] font-semibold text-[#8E95A9]">
              <th className="pb-3 pr-2 w-12 font-semibold">
                <div className="flex items-center gap-1">
                  <span>SN</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-3 font-semibold">
                <div className="flex items-center gap-1">
                  <span>Name</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-3 font-semibold">
                <div className="flex items-center gap-1">
                  <span>Price</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-3 font-semibold">
                <div className="flex items-center gap-1">
                  <span>Total Order</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 pl-3 text-right font-semibold">
                <div className="flex items-center justify-end gap-1">
                  <span>Total Sales</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-transparent text-[12px]">
            {productTopSellingList.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50/70 transition-colors group"
              >
                                <td className="py-2.5 pr-2 whitespace-nowrap">
                  {item.isMedal ? (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <img
                        src={item.medalIcon}
                        alt="medal"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-[#8E95A9] font-medium pl-1">
                      {item.sn}
                    </span>
                  )}
                </td>

                                <td className="py-2.5 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-semibold text-[#1A1D2F]">
                      {item.name}
                    </span>
                  </div>
                </td>

                                <td className="py-2.5 px-3 font-medium text-[#1A1D2F] whitespace-nowrap">
                  {item.price}
                </td>

                                <td className="py-2.5 px-3 text-[#64748B] whitespace-nowrap">
                  {item.totalOrder}
                </td>

                                <td className="py-2.5 pl-3 text-right font-bold text-[#10B981] whitespace-nowrap">
                  {item.totalSales}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
