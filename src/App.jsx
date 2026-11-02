import React, { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { DashboardPage } from './pages/DashboardPage'
import { ProductAnalyticsPage } from './pages/ProductAnalyticsPage'
import { InvoicePage } from './pages/InvoicePage'
import { CreateInvoicePage } from './pages/CreateInvoicePage'
import { SchedulePage } from './pages/SchedulePage'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { CalendarPage } from './pages/CalendarPage'
import { MessagesPage } from './pages/MessagesPage'
import { SignUpPage } from './pages/auth/SignUpPage'
import { LoginPage } from './pages/auth/LoginPage'
import { RecoverPasswordPage } from './pages/auth/RecoverPasswordPage'
import { AccountSuccessPage } from './pages/auth/AccountSuccessPage'
import { NotificationPage, SettingsPage } from './pages/OtherPages'

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [scheduleTab, setScheduleTab] = useState('List')
  const [customerDrawerOpen, setCustomerDrawerOpen] = useState(false)
  const [productDrawerOpen, setProductDrawerOpen] = useState(false)
  const [calendarModalOpen, setCalendarModalOpen] = useState(false)
  const [calendarViewMode, setCalendarViewMode] = useState('Month')

  if (activePage === 'signup') {
    return (
      <SignUpPage
        onGoToLogin={() => setActivePage('login')}
        onSignUpSuccess={() => setActivePage('success')}
      />
    )
  }

  if (activePage === 'login') {
    return (
      <LoginPage
        onGoToSignUp={() => setActivePage('signup')}
        onGoToRecover={() => setActivePage('recover')}
        onLoginSuccess={() => setActivePage('dashboard')}
      />
    )
  }

  if (activePage === 'recover') {
    return (
      <RecoverPasswordPage onGoToLogin={() => setActivePage('login')} />
    )
  }

  if (activePage === 'success') {
    return (
      <AccountSuccessPage onGoToHome={() => setActivePage('dashboard')} />
    )
  }

  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <DashboardPage
            onGoToProductAnalytics={() => {
              setActivePage('product-analytics')
              setProductDrawerOpen(false)
            }}
          />
        )
      case 'product-analytics':
        return (
          <ProductAnalyticsPage
            initialDrawerOpen={productDrawerOpen}
            onSwitchToDashboard={() => setActivePage('dashboard')}
            onSwitchToCustomer={() => setActivePage('analytics')}
          />
        )
      case 'invoice':
        return (
          <InvoicePage
            onGoToCreateInvoice={() => setActivePage('create-invoice')}
          />
        )
      case 'create-invoice':
        return (
          <CreateInvoicePage onBackToList={() => setActivePage('invoice')} />
        )
      case 'schedule':
        return <SchedulePage initialTab={scheduleTab} />
      case 'analytics':
        return <AnalyticsPage initialDrawerOpen={customerDrawerOpen} />
      case 'calendar':
        return (
          <CalendarPage
            initialViewMode={calendarViewMode}
            initialEventModalOpen={calendarModalOpen}
          />
        )
      case 'messages':
        return <MessagesPage />
      case 'notification':
        return <NotificationPage />
      case 'settings':
        return <SettingsPage />
      default:
        return (
          <DashboardPage
            onGoToProductAnalytics={() => {
              setActivePage('product-analytics')
              setProductDrawerOpen(false)
            }}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex flex-col antialiased">
      <div className="flex flex-1 min-h-screen">
                <Sidebar
          activePage={
            activePage === 'product-analytics'
              ? 'dashboard'
              : activePage === 'create-invoice'
              ? 'invoice'
              : activePage
          }
          onNavigate={(page) => {
            setActivePage(page)
            if (page === 'schedule') setScheduleTab('List')
            if (page === 'analytics') setCustomerDrawerOpen(false)
            if (page === 'calendar') {
              setCalendarViewMode('Month')
              setCalendarModalOpen(false)
            }
            if (page === 'product-analytics') setProductDrawerOpen(false)
          }}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
          onLogout={() => setActivePage('login')}
        />

                <div className="flex-1 flex flex-col min-w-0">
          <Header
            title={activePage}
            onOpenMobile={() => setMobileOpen(true)}
            onGoToLogin={() => setActivePage('login')}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1440px] w-full mx-auto">
            {renderActivePage()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
