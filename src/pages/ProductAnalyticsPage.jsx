import React, { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import { ProductSparkCard } from '../components/productAnalytics/ProductSparkCard'
import { ProductAddByMonthChart } from '../components/productAnalytics/ProductAddByMonthChart'
import { TopSellingProductsTable } from '../components/productAnalytics/TopSellingProductsTable'
import { ProductSalesAnalyticsDonut } from '../components/productAnalytics/ProductSalesAnalyticsDonut'
import { AddProductDrawer } from '../components/productAnalytics/AddProductDrawer'
import { productAnalyticsSummary } from '../data/productAnalyticsData'

export const ProductAnalyticsPage = ({
  initialDrawerOpen = false,
  onSwitchToDashboard,
  onSwitchToCustomer
}) => {
  const [activeTab, setActiveTab] = useState('Product')
  const [startDate, setStartDate] = useState('10-06-2021')
  const [endDate, setEndDate] = useState('10-10-2021')
  const [isDrawerOpen, setIsDrawerOpen] = useState(initialDrawerOpen)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (tab === 'Overview' && onSwitchToDashboard) {
      onSwitchToDashboard()
    } else if (tab === 'Customer' && onSwitchToCustomer) {
      onSwitchToCustomer()
    }
  }

  return (
    <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
          Product Analytics
        </h1>

                <div className="flex items-center gap-3">
          <button
            onClick={() => {
              const d = prompt('Start date:', startDate)
              if (d) setStartDate(d)
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2E8F0] rounded-xl text-[12px] font-semibold text-[#64748B] hover:text-[#1A1D2F] shadow-2xs transition-colors"
          >
            <span>{startDate}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
          </button>
          <button
            onClick={() => {
              const d = prompt('End date:', endDate)
              if (d) setEndDate(d)
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E2E8F0] rounded-xl text-[12px] font-semibold text-[#64748B] hover:text-[#1A1D2F] shadow-2xs transition-colors"
          >
            <span>{endDate}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
          </button>
        </div>
      </div>

            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-2xl shadow-2xs">
          {['Overview', 'Product', 'Customer'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-[13px] font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[#605BFF] text-white shadow-xs'
                  : 'text-[#8E95A9] hover:text-[#1A1D2F]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add Product</span>
        </button>
      </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          <ProductSparkCard
            title={productAnalyticsSummary.totalProduct.title}
            value={productAnalyticsSummary.totalProduct.value}
            badge={productAnalyticsSummary.totalProduct.badge}
            icon="package"
            iconBg={productAnalyticsSummary.totalProduct.iconBg}
            waveColor={productAnalyticsSummary.totalProduct.waveColor}
          />

          <ProductSparkCard
            title={productAnalyticsSummary.totalSales.title}
            value={productAnalyticsSummary.totalSales.value}
            badge={productAnalyticsSummary.totalSales.badge}
            icon="cart"
            iconBg={productAnalyticsSummary.totalSales.iconBg}
            waveColor={productAnalyticsSummary.totalSales.waveColor}
          />

          <ProductAddByMonthChart />
        </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-8">
            <TopSellingProductsTable />
          </div>
          <div className="lg:col-span-4">
            <ProductSalesAnalyticsDonut />
          </div>
        </div>
      </div>

            <AddProductDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSaveProduct={(p) => {
          console.log('Saved product:', p)
          alert(`Product "${p.name}" added successfully!`)
        }}
      />
    </div>
  )
}
