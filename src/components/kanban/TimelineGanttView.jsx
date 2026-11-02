import React, { useState } from 'react'
import { Plus, ChevronDown, Check, MoreHorizontal, Play } from 'lucide-react'
import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.png'
import avatar3 from '../../assets/images/avatar-3.png'

export const TimelineGanttView = ({ onAddTask }) => {
  const [selectedStatus, setSelectedStatus] = useState('To Do')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Grapich Design',
      checked: false,
      completed: false,
      badges: [
        { text: 'Low', color: 'bg-[#FEEAEA] text-[#EB5757]' },
        { text: 'On Track', color: 'bg-[#FEF6E6] text-[#D97706]' }
      ],
      avatars: [avatar1, avatar2, avatar3],
      time: '09.30 AM',
      topOffset: '35px',
      leftOffset: '12%',
      width: '240px'
    },
    {
      id: 2,
      title: 'Dashboard Design',
      checked: true,
      completed: true,
      badges: [
        { text: 'High', color: 'bg-[#E0F7FA] text-[#00A5A5]' },
        { text: 'On Track', color: 'bg-[#FEF6E6] text-[#D97706]' }
      ],
      avatars: [avatar1, avatar2, avatar3],
      time: '11.30 AM',
      topOffset: '135px',
      leftOffset: '28%',
      width: '260px'
    },
    {
      id: 3,
      title: 'Logo Design',
      checked: true,
      completed: true,
      badges: [
        { text: 'High', color: 'bg-[#E0F7FA] text-[#00A5A5]' },
        { text: 'On Track', color: 'bg-[#FEF6E6] text-[#D97706]' }
      ],
      avatars: [avatar1, avatar2, avatar3],
      time: '01.30 PM',
      topOffset: '235px',
      leftOffset: '18%',
      width: '250px'
    },
    {
      id: 4,
      title: 'Web Design',
      checked: true,
      completed: true,
      badges: [
        { text: 'High', color: 'bg-[#E0F7FA] text-[#00A5A5]' },
        { text: 'On Track', color: 'bg-[#FEF6E6] text-[#D97706]' }
      ],
      avatars: [avatar1, avatar2, avatar3],
      time: '03.30 PM',
      topOffset: '335px',
      leftOffset: '46%',
      width: '250px'
    }
  ])

  const timeSlots = [
    '09.00 AM',
    '10.00 AM',
    '11.00 AM',
    '12.00 PM',
    '01.00 PM',
    '02.00 PM',
    '03.00 PM',
    '04.00 PM',
    '05.00 PM'
  ]

  const daysHeader = [
    '29',
    '30',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14'
  ]

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      <div className="w-full lg:w-44 shrink-0 bg-white rounded-3xl border border-[#F2F4F8] p-3.5 shadow-xs flex flex-row lg:flex-col gap-2.5 lg:min-h-[460px]">
        {[
          { name: 'To Do', active: selectedStatus === 'To Do' },
          { name: 'Doing', active: selectedStatus === 'Doing' },
          { name: 'Done', active: selectedStatus === 'Done' }
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => setSelectedStatus(item.name)}
            className={`flex-1 lg:w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
              item.active
                ? 'bg-[#605BFF] text-white shadow-xs'
                : 'bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#1A1D2F] hover:bg-gray-50'
            }`}
          >
            <span>{item.name}</span>
            <Play
              className={`w-3 h-3 fill-current ${
                item.active ? 'text-white' : 'text-gray-400'
              }`}
            />
          </button>
        ))}
      </div>

            <div className="flex-1 w-full bg-white rounded-3xl border border-[#F2F4F8] p-5 shadow-xs overflow-x-auto no-scrollbar">
        <div className="min-w-[720px]">
                    <div className="grid grid-cols-16 text-center border-b border-gray-100 pb-3 text-[12px] font-semibold text-[#8E95A9]">
            {daysHeader.map((d, i) => (
              <div key={i} className="flex justify-center">
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-lg transition-all ${
                    d === '02'
                      ? 'bg-[#605BFF] text-white font-bold shadow-xs'
                      : 'hover:text-[#1A1D2F]'
                  }`}
                >
                  {d}
                </span>
              </div>
            ))}
          </div>

                    <div className="relative pt-2">
                        <div className="divide-y divide-gray-100">
              {timeSlots.map((time, idx) => (
                <div key={idx} className="h-12 flex items-center">
                  <span className="text-[11px] text-[#8E95A9] font-medium w-20 shrink-0">
                    {time}
                  </span>
                  <div className="flex-1 h-px bg-gray-50" />
                </div>
              ))}
            </div>

                        <div className="absolute inset-0 pl-20 pointer-events-none">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="absolute pointer-events-auto bg-white rounded-2xl border border-[#E9EDF5] px-3.5 py-2.5 shadow-md flex items-center justify-between gap-3 transition-transform hover:scale-102 cursor-pointer"
                  style={{
                    top: task.topOffset,
                    left: task.leftOffset,
                    minWidth: task.width
                  }}
                >
                                    <div className="flex items-center gap-2 min-w-0">
                    <button
                      onClick={() => handleToggleTask(task.id)}
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-all shrink-0 ${
                        task.completed
                          ? 'bg-[#605BFF] text-white'
                          : 'border border-gray-300 hover:border-gray-400 bg-white'
                      }`}
                    >
                      {task.completed && (
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      )}
                    </button>
                    <span className="text-[12px] font-bold text-[#1A1D2F] truncate">
                      {task.title}
                    </span>
                  </div>

                                    <div className="flex items-center -space-x-1.5 shrink-0">
                    {task.avatars.map((av, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full overflow-hidden ring-1 ring-white bg-gray-100"
                      >
                        <img
                          src={av}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-4 h-4 rounded-full bg-[#00C5FF] text-white flex items-center justify-center text-[8px] font-bold ring-1 ring-white">
                      <Plus className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  </div>

                                    <div className="flex items-center gap-1 shrink-0">
                    {task.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${b.color}`}
                      >
                        {b.text}
                      </span>
                    ))}
                  </div>

                                    <button className="text-gray-400 hover:text-gray-600 shrink-0">
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
