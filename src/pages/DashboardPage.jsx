import React, { useState } from 'react'
import { ChevronDown, BarChart3 } from 'lucide-react'
import { StatCard } from '../components/dashboard/StatCard'
import { ReportsChart } from '../components/dashboard/ReportsChart'
import { AnalyticsDonut } from '../components/dashboard/AnalyticsDonut'
import { RecentOrdersTable } from '../components/dashboard/RecentOrdersTable'
import { TopSellingProducts } from '../components/dashboard/TopSellingProducts'
import { statCardsData } from '../data/dashboardData'

export const DashboardPage = ({ onGoToProductAnalytics }) => {
  const [startDate, setStartDate] = useState('10-06-2021')
  const [endDate, setEndDate] = useState('10-10-2021')

  return (
    <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
            Dashboard
          </h1>

                    <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-2xl shadow-2xs">
            <button
              className="px-4 py-1.5 rounded-xl text-[12px] font-semibold bg-[#605BFF] text-white shadow-xs"
            >
              Overview
            </button>
            <button
              onClick={onGoToProductAnalytics}
              className="px-4 py-1.5 rounded-xl text-[12px] font-semibold text-[#8E95A9] hover:text-[#1A1D2F] transition-colors"
            >
              Product Analytics
            </button>
          </div>
        </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
            <button
              onClick={() => {
                const newDate = prompt('Enter start date (DD-MM-YYYY):', startDate)
                if (newDate) setStartDate(newDate)
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2E8F0] rounded-xl text-[12px] font-semibold text-[#64748B] hover:text-[#1A1D2F] hover:border-gray-300 shadow-2xs transition-colors"
            >
              <span>{startDate}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
            </button>
          </div>

                    <div className="relative">
            <button
              onClick={() => {
                const newDate = prompt('Enter end date (DD-MM-YYYY):', endDate)
                if (newDate) setEndDate(newDate)
              }}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2E8F0] rounded-xl text-[12px] font-semibold text-[#64748B] hover:text-[#1A1D2F] hover:border-gray-300 shadow-2xs transition-colors"
            >
              <span>{endDate}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
            </button>
          </div>
        </div>
      </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCardsData.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <ReportsChart onGoToAnalytics={onGoToProductAnalytics} />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <AnalyticsDonut onGoToAnalytics={onGoToProductAnalytics} />
        </div>
      </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <div className="lg:col-span-8 flex flex-col">
          <RecentOrdersTable />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <TopSellingProducts onGoToAnalytics={onGoToProductAnalytics} />
        </div>
      </div>
    </div>
  )
}
