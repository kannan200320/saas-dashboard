import React, { useState } from 'react'
import {
  Camera,
  Calendar,
  MapPin,
  Plus,
  Trash2,
  Printer,
  Monitor,
  ChevronDown
} from 'lucide-react'
import previewLogo from '../assets/images/invoice-preview-logo.png'
import defaultAvatar from '../assets/images/avatar-1.png'

export const CreateInvoicePage = ({ onBackToList }) => {
  const [formData, setFormData] = useState({
    invoiceId: '#876370',
    date: '01/12/2021',
    name: 'Alison G.',
    email: 'Example@gmail.com',
    address: 'Street'
  })

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'ipod 2021',
      rate: '$1000',
      qty: '10 Pcs',
      amount: '$10,000'
    },
    {
      id: 2,
      name: 'Apple Mackbook',
      rate: '$1500',
      qty: '10 Pcs',
      amount: '$150,000'
    },
    {
      id: 3,
      name: 'i phone 12',
      rate: '$885',
      qty: '10 Pcs',
      amount: '$8850'
    }
  ])

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const handleAddProduct = () => {
    const name = prompt('Product Name:', 'AirPods Pro')
    if (!name) return
    const rate = prompt('Rate ($):', '250')
    const qty = prompt('Quantity:', '5 Pcs')
    const amt = parseFloat(rate || 0) * parseInt(qty || 1)
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        rate: '$' + rate,
        qty: qty,
        amount: '$' + amt.toLocaleString()
      }
    ])
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6 bg-white rounded-3xl border border-[#F2F4F8] p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-bold text-[#1A1D2F]">
            Create New Invoice
          </h2>
          {onBackToList && (
            <button
              onClick={onBackToList}
              className="text-[12px] font-semibold text-[#605BFF] hover:underline"
            >
              Back to List
            </button>
          )}
        </div>

                <div className="flex justify-center py-1">
          <div className="relative group cursor-pointer" title="Change client photo">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#F2F3FE] shadow-2xs">
              <img
                src={defaultAvatar}
                alt="Client profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#605BFF] text-white flex items-center justify-center shadow-xs ring-2 ring-white">
              <Camera className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Invoice Id
            </label>
            <input
              type="text"
              value={formData.invoiceId}
              onChange={(e) =>
                setFormData({ ...formData, invoiceId: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all font-medium text-[#1A1D2F]"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Date
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full pl-3.5 pr-10 py-2.5 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all text-[#1A1D2F]"
              />
              <Calendar className="w-4 h-4 text-[#605BFF] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

                <div>
          <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-3.5 py-2.5 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all text-[#1A1D2F]"
          />
        </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all text-[#1A1D2F]"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[#64748B] mb-1">
              Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full pl-3.5 pr-10 py-2.5 text-[13px] bg-[#F8F9FD] border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all text-[#1A1D2F]"
              />
              <MapPin className="w-4 h-4 text-[#605BFF] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

                <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="text-[14px] font-bold text-[#1A1D2F]">
              Product Description
            </h4>
            <button
              onClick={handleAddProduct}
              className="w-6 h-6 rounded-full bg-[#605BFF] text-white flex items-center justify-center hover:bg-[#504BE8] transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-transparent text-[11px] font-semibold text-[#8E95A9]">
                  <th className="pb-2 font-semibold">
                    <div className="flex items-center gap-1">
                      <span>Product Name</span>
                      <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                    </div>
                  </th>
                  <th className="pb-2 px-3 font-semibold">
                    <div className="flex items-center gap-1">
                      <span>Rate</span>
                      <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                    </div>
                  </th>
                  <th className="pb-2 px-3 font-semibold">
                    <div className="flex items-center gap-1">
                      <span>QTY</span>
                      <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                    </div>
                  </th>
                  <th className="pb-2 px-3 font-semibold">
                    <div className="flex items-center gap-1">
                      <span>Amount</span>
                      <ChevronDown className="w-3 h-3 text-[#B0B7C3]" />
                    </div>
                  </th>
                  <th className="pb-2 w-8"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-transparent text-[12px]">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-2.5 text-[#3B82F6] font-medium whitespace-nowrap cursor-pointer hover:underline">
                      {p.name}
                    </td>
                    <td className="py-2.5 px-3 text-[#1A1D2F] font-medium whitespace-nowrap">
                      {p.rate}
                    </td>
                    <td className="py-2.5 px-3 text-[#64748B] whitespace-nowrap">
                      {p.qty}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-[#10B981] whitespace-nowrap">
                      {p.amount}
                    </td>
                    <td className="py-2.5 text-right">
                      <button
                        onClick={() => handleDeleteProduct(p.id)}
                        className="p-1 text-[#EF4444] hover:bg-red-50 rounded-md transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <button
            onClick={() => alert('Invoice Sent!')}
            className="flex-1 py-3 px-4 rounded-xl border border-[#605BFF] text-[#605BFF] hover:bg-purple-50 text-[13px] font-semibold transition-colors text-center"
          >
            Send Invoice
          </button>
          <button
            onClick={() => alert('Invoice Created Successfully!')}
            className="flex-1 py-3 px-4 rounded-xl bg-[#605BFF] hover:bg-[#504BE8] text-white text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all text-center"
          >
            Create Invoice
          </button>
        </div>
      </div>

            <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between px-2">
          <h3 className="text-[20px] font-bold text-[#1A1D2F]">Preview</h3>
          <div className="flex items-center gap-3">
            <button
              onClick={() => alert('Desktop / Monitor View')}
              className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Monitor className="w-5 h-5 text-[#605BFF]" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Printer className="w-5 h-5 text-[#605BFF]" />
            </button>
          </div>
        </div>

                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100 space-y-8 text-[11px] text-[#64748B]">
                    <div className="flex items-start justify-between">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={previewLogo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-right text-[10px] space-y-0.5 text-gray-400">
              <p>your.mail@gmail.com</p>
              <p>+386 989 271 3115</p>
            </div>
          </div>

                    <div className="flex items-start justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Recipient
              </span>
              <p className="font-bold text-[#1A1D2F] text-[12px]">JOHN SMITH</p>
              <p>4304 Liberty Avenue</p>
              <p>92680 Tustin, CA</p>
              <p>VAT no.: 12345678</p>
              <p className="text-gray-400 pt-1">company.mail@gmail.com</p>
              <p className="text-gray-400">+386 714 505 8385</p>
            </div>

            <div className="text-right space-y-1">
              <h1 className="text-[28px] font-extrabold text-[#1A1D2F] tracking-tight leading-none mb-3">
                Invoice
              </h1>
              <p className="text-[10px] uppercase text-gray-400">
                Invoice No. <span className="font-semibold text-gray-700">001/2021</span>
              </p>
              <p className="text-[10px] uppercase text-gray-400">
                Invoice Date <span className="font-semibold text-gray-700">January 1, 2021</span>
              </p>
            </div>
          </div>

                    <div className="border-t border-b border-gray-100 py-3 overflow-x-auto no-scrollbar">
            <div className="min-w-[360px] sm:min-w-0">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[9px] font-bold uppercase text-gray-400">
                  <th className="pb-2">Task Description</th>
                  <th className="pb-2 text-center">Hours</th>
                  <th className="pb-2 text-center">Rate</th>
                  <th className="pb-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-[11px]">
                <tr>
                  <td className="py-2.5 font-medium text-[#1A1D2F]">
                    Website redesign
                  </td>
                  <td className="py-2.5 text-center">60</td>
                  <td className="py-2.5 text-center">15 USD</td>
                  <td className="py-2.5 text-right font-medium text-[#1A1D2F]">
                    900,00 USD
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 font-medium text-[#1A1D2F]">
                    Newsletter template design
                  </td>
                  <td className="py-2.5 text-center">20</td>
                  <td className="py-2.5 text-center">12 USD</td>
                  <td className="py-2.5 text-right font-medium text-[#1A1D2F]">
                    240,00 USD
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

                        <div className="space-y-1.5 pt-4 text-right text-[11px]">
              <div className="flex justify-end gap-12 text-gray-500">
                <span>SUBTOTAL</span>
                <span className="font-semibold text-gray-700">1140,00 USD</span>
              </div>
              <div className="flex justify-end gap-12 text-gray-500">
                <span>DISCOUNT 5%</span>
                <span className="font-semibold text-gray-700">57,00 USD</span>
              </div>
              <div className="flex justify-end gap-12 text-[15px] font-bold text-[#0052CC] pt-2 border-t border-gray-100">
                <span>TOTAL</span>
                <span>1083,00 USD</span>
              </div>
            </div>
          </div>

                    <div className="text-[10px] text-gray-400 space-y-1">
            <p>
              Transfer the amount to the business account below. Please include
              invoice number on your check.
            </p>
            <p className="font-semibold text-gray-700">
              BANK: FTSBUS33 &nbsp;&bull;&nbsp; IBAN: GB82-1111-2222-3333
            </p>
          </div>

                    <div className="space-y-3 pt-3 border-t border-gray-100 text-[10px] text-gray-400">
            <span className="font-bold uppercase tracking-wider text-gray-400 block">
              Notes
            </span>
            <p className="leading-relaxed">
              All amounts are in dollars. Please make the payment within 15 days
              from the issue of date of this invoice. Tax is not charged on the
              basis of paragraph 1 of Article 94 of the Value Added Tax Act (I
              am not liable for VAT).
            </p>
            <p>Thank you for your confidence in my work.</p>
            <p className="pt-2 font-medium text-gray-600">Signature</p>
          </div>
        </div>
      </div>
    </div>
  )
}
