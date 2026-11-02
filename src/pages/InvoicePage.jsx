import React, { useState, useMemo } from 'react'
import { Plus, Search, FileText } from 'lucide-react'
import { InvoiceTable } from '../components/invoice/InvoiceTable'
import { AddInvoiceModal } from '../components/invoice/AddInvoiceModal'
import { initialInvoices } from '../data/invoiceData'

export const InvoicePage = ({ onGoToCreateInvoice }) => {
  const [invoices, setInvoices] = useState(initialInvoices)
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingInvoice, setEditingInvoice] = useState(null)
  const [sortField, setSortField] = useState(null)
  const [sortAsc, setSortAsc] = useState(true)

  const handleToggleCheck = (id) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, checked: !inv.checked } : inv))
    )
  }

  const allChecked = useMemo(() => {
    return invoices.length > 0 && invoices.every((inv) => inv.checked)
  }, [invoices])

  const handleToggleSelectAll = () => {
    const nextState = !allChecked
    setInvoices((prev) => prev.map((inv) => ({ ...inv, checked: nextState })))
  }

  const handleToggleStar = (id) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, starred: !inv.starred } : inv))
    )
  }

  const handleDeleteInvoice = (id) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id))
  }

  const handleBulkDelete = () => {
    const checkedCount = invoices.filter((i) => i.checked).length
    if (checkedCount === 0) {
      alert('Please select at least one invoice to delete.')
      return
    }
    if (confirm(`Are you sure you want to delete ${checkedCount} selected invoice(s)?`)) {
      setInvoices((prev) => prev.filter((inv) => !inv.checked))
    }
  }

  const handleEditInvoice = (invoice) => {
    setEditingInvoice(invoice)
    setIsModalOpen(true)
  }

  const handleSaveInvoice = (savedInvoice) => {
    if (editingInvoice) {
      setInvoices((prev) =>
        prev.map((inv) => (inv.id === savedInvoice.id ? savedInvoice : inv))
      )
    } else {
      setInvoices((prev) => [savedInvoice, ...prev])
    }
    setEditingInvoice(null)
  }

  const handleSort = (field) => {
    const isAsc = sortField === field ? !sortAsc : true
    setSortField(field)
    setSortAsc(isAsc)

    setInvoices((prev) => {
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

  const filteredInvoices = useMemo(() => {
    if (!searchQuery.trim()) return invoices
    const q = searchQuery.toLowerCase()
    return invoices.filter(
      (inv) =>
        inv.id.toLowerCase().includes(q) ||
        inv.name.toLowerCase().includes(q) ||
        inv.email.toLowerCase().includes(q) ||
        inv.status.toLowerCase().includes(q)
    )
  }, [invoices, searchQuery])

  return (
    <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
          Invoice List
        </h1>

        <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-44 sm:w-56 pl-3.5 pr-9 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[13px] text-[#1A1D2F] placeholder-[#94A3B8] focus:outline-none focus:border-[#605BFF] focus:ring-1 focus:ring-[#605BFF] transition-all"
            />
            <Search className="w-4 h-4 text-[#94A3B8] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

                    {onGoToCreateInvoice && (
            <button
              onClick={onGoToCreateInvoice}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#E2E8F0] hover:border-[#605BFF] text-[#605BFF] rounded-xl text-[13px] font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Full Invoice Builder</span>
            </button>
          )}

                    <button
            onClick={() => {
              if (onGoToCreateInvoice) {
                onGoToCreateInvoice()
              } else {
                setEditingInvoice(null)
                setIsModalOpen(true)
              }
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add New</span>
          </button>
        </div>
      </div>

            <InvoiceTable
        invoices={filteredInvoices}
        onToggleCheck={handleToggleCheck}
        onToggleSelectAll={handleToggleSelectAll}
        onToggleStar={handleToggleStar}
        onDeleteInvoice={handleDeleteInvoice}
        onEditInvoice={handleEditInvoice}
        onBulkDelete={handleBulkDelete}
        onSort={handleSort}
        allChecked={allChecked}
      />

            <AddInvoiceModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingInvoice(null)
        }}
        onSave={handleSaveInvoice}
        editingInvoice={editingInvoice}
      />
    </div>
  )
}
