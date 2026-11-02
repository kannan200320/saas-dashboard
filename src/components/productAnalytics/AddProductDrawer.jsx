import React, { useState, useEffect } from 'react'
import { ChevronLeft, Camera, ChevronDown, Check } from 'lucide-react'

export const AddProductDrawer = ({ isOpen, onClose, onSaveProduct }) => {
  const [formData, setFormData] = useState({
    name: 'Mackbook Pro 2021 14"',
    brand: 'Apple',
    price: '$1200',
    negotiable: true,
    description:
      'This the New creation Of apple This the New creation Of apple This the New creation Of apple This the New creation Of apple.'
  })

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSaveProduct) onSaveProduct(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
            <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0F1424]/30 backdrop-blur-[1px] transition-opacity animate-in fade-in duration-200"
      />

            <aside className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[380px] md:w-[420px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.08)] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
                    <div className="flex items-center gap-4 mb-3">
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-[#8E95A9]" />
            </button>
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1A1D2F]">
              Add a New Product
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex justify-center my-5">
              <div className="w-24 h-24 rounded-full bg-[#F5F6F9] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <Camera className="w-6 h-6 text-[#1A1D2F]" />
              </div>
            </div>

                        <div>
              <label className="block text-[13px] font-semibold text-[#1A1D2F] mb-1.5">
                Product Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 text-[13px] bg-[#F8F9FD] border-0 rounded-2xl text-[#1A1D2F] focus:outline-none focus:ring-1 focus:ring-[#605BFF] transition-all font-medium"
                required
              />
            </div>

                        <div>
              <label className="block text-[13px] font-semibold text-[#1A1D2F] mb-1.5">
                Brand
              </label>
              <div className="relative">
                <select
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                  className="w-full px-4 py-3 text-[13px] bg-[#F8F9FD] border-0 rounded-2xl text-[#1A1D2F] focus:outline-none focus:ring-1 focus:ring-[#605BFF] transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Sony">Sony</option>
                  <option value="Nike">Nike</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#8E95A9] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

                        <div>
              <label className="block text-[13px] font-semibold text-[#1A1D2F] mb-1.5">
                Price
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-36 px-4 py-3 text-[13px] bg-[#F8F9FD] border-0 rounded-2xl text-[#1A1D2F] focus:outline-none focus:ring-1 focus:ring-[#605BFF] transition-all font-medium"
                  required
                />

                                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        negotiable: !formData.negotiable
                      })
                    }
                    className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                      formData.negotiable
                        ? 'bg-[#605BFF] border-[#605BFF] text-white'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {formData.negotiable && (
                      <Check className="w-3 h-3 stroke-[3]" />
                    )}
                  </button>
                  <span className="text-[13px] font-medium text-[#1A1D2F]">
                    Negotiable
                  </span>
                </label>
              </div>
            </div>

                        <div>
              <label className="block text-[13px] font-semibold text-[#1A1D2F] mb-1.5">
                Descriptions
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-4 text-[12px] bg-[#F8F9FD] border-0 rounded-2xl text-[#71778E] focus:outline-none focus:ring-1 focus:ring-[#605BFF] transition-all leading-relaxed resize-none"
                required
              />
            </div>

                        <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#605BFF] hover:bg-[#504BE8] text-white text-[14px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Save Product</span>
              </button>
            </div>
          </form>
        </div>
      </aside>
    </div>
  )
}
