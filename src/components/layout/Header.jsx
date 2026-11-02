import React from 'react'
import { Menu } from 'lucide-react'
import logoImg from '../../assets/images/logo.png'
import easinAvatar from '../../assets/images/avatar-easin.png'

export const Header = ({ onOpenMobile, title, onGoToLogin }) => {
  return (
    <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md border-b border-[#F0F1F6] transition-all">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="p-2 -ml-1 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Base" className="w-6 h-6 object-contain" />
          <span className="font-bold text-[17px] text-[#1A1D2F]">Base</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onGoToLogin}
          title="Account / Log In"
          className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-gray-100 hover:ring-[#605BFF] transition-all cursor-pointer"
        >
          <img src={easinAvatar} alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  )
}
