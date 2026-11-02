import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { CustomerTable } from '../components/customer/CustomerTable'
import { CustomerProfilePanel } from '../components/customer/CustomerProfilePanel'
import { AddCustomerDrawer } from '../components/customer/AddCustomerDrawer'
import { initialCustomers } from '../data/customerData'

export const AnalyticsPage = ({ initialDrawerOpen = false }) => {
  const [customers, setCustomers] = useState(initialCustomers)
  const [selectedCustomerId, setSelectedCustomerId] = useState('c-1')
  const [isDrawerOpen, setIsDrawerOpen] = useState(initialDrawerOpen)
  const [sortField, setSortField] = useState(null)
  const [sortAsc, setSortAsc] = useState(true)

  const selectedCustomer =
    customers.find((c) => c.id === selectedCustomerId) || customers[0]

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prev) => [newCustomer, ...prev])
    setSelectedCustomerId(newCustomer.id)
    setIsDrawerOpen(false)
  }

  const handleDeleteCustomer = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id))
    if (selectedCustomerId === id && customers.length > 1) {
      setSelectedCustomerId(customers[0].id)
    }
  }

  const handleEditCustomer = (customer) => {
    alert(`Editing ${customer.name}`)
  }

  const handleSort = (field) => {
    const isAsc = sortField === field ? !sortAsc : true
    setSortField(field)
    setSortAsc(isAsc)

    setCustomers((prev) => {
      return [...prev].sort((a, b) => {
        let valA = a[field] || ''
        let valB = b[field] || ''
        if (typeof valA === 'string') valA = valA.toLowerCase()
        if (typeof valB === 'string') valB = valB.toLowerCase()

        if (valA < valB) return isAsc ? -1 : 1
        if (valA > valB) return isAsc ? 1 : -1
        return 0
      })
    })
  }

  return (
    <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
          Customer List
        </h1>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add Customer</span>
        </button>
      </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 flex flex-col">
          <CustomerTable
            customers={customers}
            selectedCustomerId={selectedCustomerId}
            onSelectCustomer={(id) => {
              setSelectedCustomerId(id)
              setIsDrawerOpen(false)
            }}
            onEditCustomer={handleEditCustomer}
            onDeleteCustomer={handleDeleteCustomer}
            onSort={handleSort}
          />
        </div>

                <div className="lg:col-span-4 flex flex-col">
          {isDrawerOpen ? (
            <AddCustomerDrawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              onAddCustomer={handleAddCustomer}
            />
          ) : (
            <CustomerProfilePanel customer={selectedCustomer} />
          )}
        </div>
      </div>
    </div>
  )
}
