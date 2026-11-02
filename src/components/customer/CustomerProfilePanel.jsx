import React from 'react'
import { Mail, Phone, MapPin, MoreHorizontal } from 'lucide-react'

export const CustomerProfilePanel = ({ customer }) => {
  if (!customer) return null

  const { contactInfo, performance } = customer

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs space-y-6">
            <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 ring-4 ring-[#F2F3FE] mb-3 shrink-0">
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-[18px] font-bold text-[#1A1D2F] leading-snug">
          {customer.name}
        </h3>
        <p className="text-[12px] text-[#8E95A9] font-medium">{customer.role}</p>
      </div>

            <div className="space-y-3.5 pt-2 border-t border-gray-100">
        <h4 className="text-[13px] font-bold text-[#1A1D2F]">Contact Info</h4>
        <div className="space-y-3 text-[12px] text-[#64748B]">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#8E95A9] shrink-0" />
            <span className="truncate">{contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#8E95A9] shrink-0" />
            <span>{contactInfo.phone}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#8E95A9] shrink-0 mt-0.5" />
            <div className="flex flex-col leading-snug">
              {contactInfo.addressLine1 ? (
                <>
                  <span>{contactInfo.addressLine1}</span>
                  {contactInfo.addressLine2 && <span>{contactInfo.addressLine2}</span>}
                </>
              ) : contactInfo.address.includes('\n') ? (
                contactInfo.address.split('\n').map((line, idx) => (
                  <span key={idx}>{line}</span>
                ))
              ) : (
                <span>{contactInfo.address}</span>
              )}
            </div>
          </div>
        </div>
      </div>

            <div className="pt-2 border-t border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-[13px] font-bold text-[#1A1D2F]">Performance</h4>
          <button className="text-gray-400 hover:text-gray-700">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

                <div className="relative pt-6 pb-2">
          <div className="flex items-end justify-between gap-2 h-28 px-2">
            {performance.months.map((m, idx) => {
              const heightPercent = (m.value / 2.8) * 100
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center justify-end h-24 relative">
                                        {m.isHighlight && (
                      <div className="absolute -top-6 px-1.5 py-0.5 rounded-md bg-[#FF764C] text-white text-[10px] font-bold shadow-xs whitespace-nowrap">
                        {m.display}
                      </div>
                    )}
                    <div
                      className={`w-2.5 rounded-full transition-all ${
                        m.isHighlight
                          ? 'bg-[#FF764C]'
                          : 'bg-[#FEEFEA] hover:bg-[#FFD9CE]'
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-[#8E95A9] font-medium">
                    {m.month}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

                <div className="flex items-center justify-around pt-2">
                    <div className="relative flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="24"
                stroke="#FEF6E6"
                strokeWidth="5"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="24"
                stroke="#FFBB54"
                strokeWidth="5"
                fill="none"
                strokeDasharray="150"
                strokeDashoffset="45"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[12px] font-bold text-[#1A1D2F]">
              {performance.progress1}%
            </span>
          </div>

                    <div className="relative flex items-center justify-center">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="24"
                stroke="#E8F1FD"
                strokeWidth="5"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="24"
                stroke="#4385F5"
                strokeWidth="5"
                fill="none"
                strokeDasharray="150"
                strokeDashoffset="60"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[12px] font-bold text-[#1A1D2F]">
              {performance.progress2}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
