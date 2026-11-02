import React, { useState } from 'react'
import { Filter, Search } from 'lucide-react'
import { KanbanCard } from './KanbanCard'
import { initialKanbanColumns } from '../../data/kanbanData'

export const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialKanbanColumns)
  const [searchQuery, setSearchQuery] = useState('')

  const handleToggleTask = (taskId) => {
    setColumns((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((t) =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        )
      }))
    )
  }

  return (
    <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {columns.map((col) => {
          const filteredTasks = col.tasks.filter((t) =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          return (
            <div key={col.id} className="space-y-3.5">
                            <div className="flex items-center justify-between px-1">
                <h3 className="text-[15px] font-bold text-[#1A1D2F]">
                  {col.title}
                </h3>
              </div>

                            <div className="space-y-3.5">
                {filteredTasks.map((task) => (
                  <KanbanCard
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleTask}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
