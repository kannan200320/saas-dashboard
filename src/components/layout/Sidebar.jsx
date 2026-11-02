import React from 'react'
import logoImg from '../../assets/images/logo.png'
import easinAvatar from '../../assets/images/avatar-easin.png'
import funnelImg from '../../assets/images/funnel-illustration.png'
import {
  LayoutGrid,
  BarChart2,
  FileText,
  CalendarDays,
  Calendar,
  Activity,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  X
} from 'lucide-react'
import { navItems } from '../../data/navigationData'

const getIcon = (iconName, className) => {
  switch (iconName) {
    case 'LayoutGrid':
      return <LayoutGrid className={className} />
    case 'BarChart2':
      return <BarChart2 className={className} />
    case 'FileText':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
        </svg>
      )
    case 'CalendarDays':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    case 'Calendar':
      return <Calendar className={className} />
    case 'Activity':
      return <Activity className={className} />
    case 'Bell':
      return <Bell className={className} />
    case 'Settings':
      return <Settings className={className} />
    default:
      return <LayoutGrid className={className} />
  }
}

export const Sidebar = ({
  activePage,
  onNavigate,
  isCollapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
  onLogout
}) => {
  return (
    <>
            {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

            <aside
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 flex flex-col justify-between bg-white border-r border-[#F0F1F6] transition-all duration-300 ease-in-out shrink-0 ${
          isCollapsed ? 'w-[80px]' : 'w-[220px]'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
                <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar py-6">
                    <div
            className={`flex items-center gap-3 px-6 mb-8 cursor-pointer ${
              isCollapsed ? 'justify-center px-0 flex-col gap-1.5' : ''
            }`}
            onClick={() => onNavigate('dashboard')}
          >
            <div className="w-[34px] h-[34px] rounded-full overflow-hidden flex items-center justify-center shrink-0">
              <img src={logoImg} alt="Base" className="w-full h-full object-contain" />
            </div>
            {(!isCollapsed || isCollapsed) && (
              <span
                className={`text-[20px] font-bold text-[#1A1D2F] tracking-tight ${
                  isCollapsed ? 'text-[13px] font-semibold' : ''
                }`}
              >
                Base
              </span>
            )}
                        <button
              onClick={onCloseMobile}
              className="lg:hidden ml-auto p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

                    <nav className="flex-1 px-3 space-y-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    if (onCloseMobile) onCloseMobile()
                  }}
                  title={isCollapsed ? item.label : undefined}
                  className={`w-full group relative flex items-center gap-3.5 rounded-xl transition-all text-[14px] font-medium ${
                    isCollapsed
                      ? 'justify-center h-11 w-11 mx-auto px-0'
                      : 'px-4 py-2.5'
                  } ${
                    isActive
                      ? 'bg-[#F2F3FE] text-[#605BFF] font-semibold'
                      : 'text-[#9AA0AC] hover:text-[#4A5163] hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`transition-colors shrink-0 ${
                      isActive ? 'text-[#605BFF]' : 'text-[#9AA0AC] group-hover:text-[#4A5163]'
                    }`}
                  >
                    {getIcon(item.icon, 'w-5 h-5')}
                  </span>

                  {!isCollapsed && (
                    <span className="flex-1 text-left whitespace-nowrap">
                      {item.label}
                    </span>
                  )}

                  {!isCollapsed && item.badge && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-[#FFEDED] text-[#FF5B5B]">
                      {item.badge}
                    </span>
                  )}

                                    {isCollapsed && item.badge && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF5B5B]" />
                  )}
                </button>
              )
            })}
          </nav>
        </div>

                <div className="p-3 border-t border-[#F0F1F6]/50">
                    {!isCollapsed && (
            <div className="mb-4 p-4 rounded-2xl bg-gradient-to-b from-[#F2F7FF] to-[#E9F1FE] border border-[#DEEBFF] text-center relative overflow-hidden">
              <div className="flex justify-center mb-2">
                <img
                  src={funnelImg}
                  alt="Upgrade"
                  className="w-16 h-16 object-contain drop-shadow-sm"
                />
              </div>
              <button
                onClick={() => alert('Upgrade to Pro features!')}
                className="w-full py-2 px-3 text-[12px] font-semibold text-white bg-[#605BFF] hover:bg-[#504BE8] transition-all rounded-xl shadow-xs shadow-[#605BFF]/30 active:scale-98"
              >
                Upgrade Now
              </button>
            </div>
          )}

                    <div
            className={`flex items-center gap-2.5 py-1 ${
              isCollapsed ? 'flex-col gap-2 justify-center' : 'justify-between'
            }`}
          >
            <div
              onClick={onLogout}
              className={`flex items-center gap-2.5 min-w-0 cursor-pointer group ${isCollapsed ? 'justify-center' : ''}`}
              title="Sign In / Log In"
            >
              <div className="w-[34px] h-[34px] rounded-full overflow-hidden shrink-0 ring-1 ring-gray-100 group-hover:ring-2 group-hover:ring-[#605BFF] transition-all">
                <img
                  src={easinAvatar}
                  alt="Easin Arafat"
                  className="w-full h-full object-cover"
                />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-semibold text-[#1A1D2F] group-hover:text-[#605BFF] transition-colors truncate leading-tight">
                    Easin Arafat
                  </span>
                  <span className="text-[11px] text-[#9AA0AC] leading-tight">
                    Free Account
                  </span>
                </div>
              )}
            </div>

                        <div className={`flex items-center gap-1 ${isCollapsed ? 'flex-col' : ''}`}>
              {onLogout && (
                <button
                  onClick={onLogout}
                  title="Sign In / Log In"
                  className="p-1.5 rounded-lg text-[#9AA0AC] hover:text-[#605BFF] hover:bg-[#F2F3FE] transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}

                            <button
                onClick={onToggleCollapse}
                title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                className="p-1.5 rounded-lg text-[#9AA0AC] hover:text-[#1A1D2F] hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {isCollapsed ? (
                  <ChevronRight className="w-4 h-4" />
                ) : (
                  <ChevronLeft className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
