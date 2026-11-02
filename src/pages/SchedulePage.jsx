import React, { useState, useMemo } from 'react'
import { Plus, Filter, Search, ChevronDown, SlidersHorizontal, CalendarDays, CheckSquare } from 'lucide-react'
import { MiniCalendar } from '../components/schedule/MiniCalendar'
import { PeopleList } from '../components/schedule/PeopleList'
import { ScheduleTable } from '../components/schedule/ScheduleTable'
import { AddScheduleModal } from '../components/schedule/AddScheduleModal'
import { KanbanBoard } from '../components/kanban/KanbanBoard'
import { TimelineGanttView } from '../components/kanban/TimelineGanttView'
import { TaskPreviewListView } from '../components/schedule/TaskPreviewListView'
import { initialSchedules } from '../data/scheduleData'

export const SchedulePage = ({ initialTab = 'List' }) => {
  const [viewMode, setViewMode] = useState('task-preview')
  const [activeTab, setActiveTab] = useState(initialTab)
  const [schedules, setSchedules] = useState(initialSchedules)
  const [selectedPersonId, setSelectedPersonId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState(null)
  const [sortField, setSortField] = useState(null)
  const [sortAsc, setSortAsc] = useState(true)

  const handleToggleCheck = (id) => {
    setSchedules((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const allChecked = useMemo(() => {
    return schedules.length > 0 && schedules.every((item) => item.checked)
  }, [schedules])

  const handleToggleSelectAll = () => {
    const nextState = !allChecked
    setSchedules((prev) => prev.map((item) => ({ ...item, checked: nextState })))
  }

  const handleEditSchedule = (item) => {
    setEditingSchedule(item)
    setIsModalOpen(true)
  }

  const handleDeleteSchedule = (id) => {
    setSchedules((prev) => prev.filter((item) => item.id !== id))
  }

  const handleSaveSchedule = (saved) => {
    if (editingSchedule) {
      setSchedules((prev) =>
        prev.map((item) => (item.id === saved.id ? saved : item))
      )
    } else {
      setSchedules((prev) => [saved, ...prev])
    }
    setEditingSchedule(null)
  }

  const handleSort = (field) => {
    const isAsc = sortField === field ? !sortAsc : true
    setSortField(field)
    setSortAsc(isAsc)

    setSchedules((prev) => {
      return [...prev].sort((a, b) => {
        let valA = a[field] || ''
        let valB = b[field] || ''
        if (valA < valB) return isAsc ? -1 : 1
        if (valA > valB) return isAsc ? 1 : -1
        return 0
      })
    })
  }

  return (
    <div className="space-y-6">
            {viewMode === 'task-preview' ? (
        <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
                Task Preview
              </h1>
                            <div className="inline-flex items-center p-0.5 bg-gray-100 rounded-xl text-[11px] font-semibold">
                <button
                  onClick={() => setViewMode('task-preview')}
                  className="px-2.5 py-1 rounded-lg bg-white text-[#605BFF] shadow-2xs cursor-pointer"
                >
                  Task Preview
                </button>
                <button
                  onClick={() => setViewMode('schedule-list')}
                  className="px-2.5 py-1 rounded-lg text-[#8E95A9] hover:text-[#1A1D2F] cursor-pointer"
                >
                  Schedule List
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {activeTab === 'Timeline' ? (
                <>
                  <div className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[12px] font-semibold text-[#64748B] shadow-2xs cursor-pointer">
                    <span>December 2021</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[12px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Add Task</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => alert('Filter options')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all cursor-pointer"
                >
                  <span>Filter</span>
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-2xl shadow-2xs">
              {['List', 'Board', 'Timeline'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#605BFF] text-white shadow-xs'
                      : 'text-[#8E95A9] hover:text-[#1A1D2F]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab !== 'Timeline' && (
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-4 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-2xl text-[13px] text-[#1A1D2F] placeholder-[#9AA0AC] focus:outline-none focus:border-[#605BFF] transition-all shadow-2xs"
                />
                <Search className="w-4 h-4 text-[#9AA0AC] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      ) : (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-[24px] font-bold text-[#1A1D2F] tracking-tight">
              Schedule List
            </h1>
            <div className="inline-flex items-center p-0.5 bg-gray-100 rounded-xl text-[11px] font-semibold">
              <button
                onClick={() => setViewMode('task-preview')}
                className="px-2.5 py-1 rounded-lg text-[#8E95A9] hover:text-[#1A1D2F] cursor-pointer"
              >
                Task Preview
              </button>
              <button
                onClick={() => setViewMode('schedule-list')}
                className="px-2.5 py-1 rounded-lg bg-white text-[#605BFF] shadow-2xs cursor-pointer"
              >
                Schedule List
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setEditingSchedule(null)
              setIsModalOpen(true)
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-xl text-[13px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add New</span>
          </button>
        </div>
      )}

            {viewMode === 'task-preview' ? (
        activeTab === 'Timeline' ? (
                    <TimelineGanttView onAddTask={() => setIsModalOpen(true)} />
        ) : activeTab === 'Board' ? (
                    <KanbanBoard />
        ) : (
                    <TaskPreviewListView onAddTask={() => setIsModalOpen(true)} />
        )
      ) : (
                <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-[280px] shrink-0 space-y-4">
            <button
              onClick={() => {
                setEditingSchedule(null)
                setIsModalOpen(true)
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#605BFF] hover:bg-[#504BE8] text-white rounded-2xl text-[14px] font-semibold shadow-xs shadow-[#605BFF]/30 active:scale-98 transition-all"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Create Schedule</span>
            </button>

            <MiniCalendar onSelectDate={(d) => console.log('Selected date:', d)} />

            <PeopleList
              selectedPersonId={selectedPersonId}
              onSelectPerson={(id) =>
                setSelectedPersonId(selectedPersonId === id ? null : id)
              }
            />

            <button
              onClick={() => alert('Filter set to My Schedule')}
              className="w-full py-2.5 px-4 bg-white border border-[#E2E8F0] hover:border-[#605BFF]/30 text-[#605BFF] hover:bg-gray-50/80 rounded-2xl text-[13px] font-semibold shadow-2xs transition-colors"
            >
              My Schedule
            </button>
          </div>

          <div className="flex-1 w-full min-w-0">
            <ScheduleTable
              schedules={schedules}
              onToggleCheck={handleToggleCheck}
              onToggleSelectAll={handleToggleSelectAll}
              onEditSchedule={handleEditSchedule}
              onDeleteSchedule={handleDeleteSchedule}
              onSort={handleSort}
              allChecked={allChecked}
            />
          </div>
        </div>
      )}

            <AddScheduleModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingSchedule(null)
        }}
        onSave={handleSaveSchedule}
        editingSchedule={editingSchedule}
      />
    </div>
  )
}
