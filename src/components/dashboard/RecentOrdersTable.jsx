import React, { useState } from 'react'
import { ChevronDown, MoreHorizontal } from 'lucide-react'
import { recentOrdersData } from '../../data/dashboardData'

export const RecentOrdersTable = () => {
  const [orders, setOrders] = useState(recentOrdersData)
  const [sortField, setSortField] = useState(null)
  const [sortAsc, setSortAsc] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const handleSort = (field) => {
    const isAsc = sortField === field ? !sortAsc : true
    setSortField(field)
    setSortAsc(isAsc)

    const sorted = [...orders].sort((a, b) => {
      let valA = a[field]
      let valB = b[field]
      if (field === 'price') {
        valA = parseFloat(valA.replace('$', ''))
        valB = parseFloat(valB.replace('$', ''))
      }
      if (valA < valB) return isAsc ? -1 : 1
      if (valA > valB) return isAsc ? 1 : -1
      return 0
    })
    setOrders(sorted)
  }

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
        <h3 className="text-[16px] font-bold text-[#1A1D2F]">Recent Orders</h3>
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
                View All Orders
              </button>
              <button
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-700"
              >
                Refresh List
              </button>
            </div>
          )}
        </div>
      </div>

            <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-transparent text-[11px] font-semibold text-[#8E95A9]">
              <th
                onClick={() => handleSort('id')}
                className="pb-3 pr-4 font-semibold cursor-pointer hover:text-[#1A1D2F] transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Tracking no</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th
                onClick={() => handleSort('name')}
                className="pb-3 px-4 font-semibold cursor-pointer hover:text-[#1A1D2F] transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Product Name</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th
                onClick={() => handleSort('price')}
                className="pb-3 px-4 font-semibold cursor-pointer hover:text-[#1A1D2F] transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>Price</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th
                onClick={() => handleSort('totalOrder')}
                className="pb-3 px-4 font-semibold text-center cursor-pointer hover:text-[#1A1D2F] transition-colors"
              >
                <div className="flex items-center justify-center gap-1">
                  <span>Total Order</span>
                  <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 pl-4 font-semibold text-right">
                <span>Total Amount</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-transparent text-[13px]">
            {orders.map((order) => (
              <tr
                key={order.id + order.name}
                className="hover:bg-gray-50/70 transition-colors group"
              >
                                <td className="py-3.5 pr-4 text-[#8E95A9] font-medium whitespace-nowrap">
                  {order.id}
                </td>

                                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                    <span className="font-medium text-[#1A1D2F]">
                      {order.name}
                    </span>
                  </div>
                </td>

                                <td className="py-3.5 px-4 font-medium text-[#1A1D2F] whitespace-nowrap">
                  {order.price}
                </td>

                                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                  <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-lg text-[12px] font-semibold bg-[#E4F8F7] text-[#00A5A5] min-w-[42px]">
                    {order.totalOrder}
                  </span>
                </td>

                                <td className="py-3.5 pl-4 text-right font-medium text-[#1A1D2F] whitespace-nowrap">
                  {order.totalAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
