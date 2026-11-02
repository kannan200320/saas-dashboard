import React from 'react'
import { Bell, Settings as SettingsIcon } from 'lucide-react'

export const NotificationPage = () => (
  <div className="space-y-6">
    <h1 className="text-[24px] font-bold text-[#1A1D2F]">Notifications</h1>
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-12 text-center">
      <Bell className="w-12 h-12 text-[#605BFF] mx-auto mb-3" />
      <h3 className="text-[16px] font-bold text-[#1A1D2F] mb-1">
        Activity Notifications
      </h3>
      <p className="text-[13px] text-[#8E95A9]">
        Notifications center configured according to Base design tokens.
      </p>
    </div>
  </div>
)

export const SettingsPage = () => (
  <div className="space-y-6">
    <h1 className="text-[24px] font-bold text-[#1A1D2F]">Settings</h1>
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-12 text-center">
      <SettingsIcon className="w-12 h-12 text-[#605BFF] mx-auto mb-3" />
      <h3 className="text-[16px] font-bold text-[#1A1D2F] mb-1">
        Account & Preferences
      </h3>
      <p className="text-[13px] text-[#8E95A9]">
        Settings panel configured according to Base design system.
      </p>
    </div>
  </div>
)
