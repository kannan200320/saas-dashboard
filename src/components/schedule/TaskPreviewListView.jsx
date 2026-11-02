import React, { useState } from 'react'
import { Check, ChevronDown, Pencil, Trash2 } from 'lucide-react'

const ToolIcon = ({ type }) => {
  switch (type) {
    case 'figma':
      return (
        <div className="w-6 h-6 rounded-md bg-[#F24E1E]/10 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
            <path
              d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
              fill="#1ABCFE"
            />
            <path
              d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
              fill="#0ACF83"
            />
            <path
              d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
              fill="#FF7262"
            />
            <path
              d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
              fill="#F24E1E"
            />
            <path
              d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
              fill="#A259FF"
            />
          </svg>
        </div>
      )
    case 'illustrator':
      return (
        <div className="w-6 h-6 rounded-md bg-[#FF9A00]/15 flex items-center justify-center font-black text-[10px] text-[#FF9A00] shrink-0 border border-[#FF9A00]/30">
          Ai
        </div>
      )
    case 'photoshop':
      return (
        <div className="w-6 h-6 rounded-md bg-[#001E36] flex items-center justify-center font-black text-[10px] text-[#31A8FF] shrink-0 border border-[#31A8FF]/40">
          Ps
        </div>
      )
    case 'web':
    default:
      return (
        <div className="w-6 h-6 rounded-md bg-[#00C5FF]/15 flex items-center justify-center font-black text-[10px] text-[#00C5FF] shrink-0 border border-[#00C5FF]/40">
          Wd
        </div>
      )
  }
}

export const TaskPreviewListView = ({ onAddTask }) => {
  const [sections, setSections] = useState({
    todo: [
      {
        id: 't-1',
        title: 'Ui Design',
        icon: 'figma',
        startDate: '03/12/2021',
        endDate: '5/12/2021',
        member: '5 Member',
        status: 'Pending',
        checked: false
      },
      {
        id: 't-2',
        title: 'Logo Design',
        icon: 'illustrator',
        startDate: '03/12/2021',
        endDate: '5/12/2021',
        member: '5 Member',
        status: 'Pending',
        checked: false
      }
    ],
    doing: [
      {
        id: 't-3',
        title: 'Grapich Design',
        icon: 'photoshop',
        startDate: '03/12/2021',
        endDate: '5/12/2021',
        member: '5 Member',
        status: 'Running',
        checked: true
      },
      {
        id: 't-4',
        title: 'Web Design',
        icon: 'web',
        startDate: '03/12/2021',
        endDate: '5/12/2021',
        member: '5 Member',
        status: 'Running',
        checked: true
      }
    ],
    done: [
      {
        id: 't-5',
        title: 'Logo Design',
        icon: 'illustrator',
        startDate: '01/12/2021',
        endDate: '3/12/2021',
        member: '5 Member',
        status: 'Done',
        checked: true
      }
    ]
  })

  const toggleCheck = (sectionKey, id) => {
    setSections((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }))
  }

  const handleDelete = (sectionKey, id) => {
    setSections((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey].filter((item) => item.id !== id)
    }))
  }

  const renderSection = (title, sectionKey, items) => (
    <div className="bg-white rounded-3xl border border-[#F2F4F8] p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2">
        <h3 className="text-[17px] font-bold text-[#1A1D2F]">{title}</h3>
        <button
          onClick={() => alert(`View all tasks under ${title}`)}
          className="text-[13px] font-semibold text-[#605BFF] hover:underline cursor-pointer"
        >
          See More
        </button>
      </div>

            <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b border-[#F0F1F6] text-[12px] font-semibold text-[#8E95A9]">
              <th className="pb-3 pr-4 w-12 font-semibold">Check Box</th>
              <th className="pb-3 px-4 font-semibold">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F]">
                  <span>Task Name</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-4 font-semibold">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F]">
                  <span>Start Date</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-4 font-semibold">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F]">
                  <span>End Date</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-4 font-semibold">
                <div className="flex items-center gap-1 cursor-pointer hover:text-[#1A1D2F]">
                  <span>Member</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 px-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-[#1A1D2F]">
                  <span>Status</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#B0B7C3]" />
                </div>
              </th>
              <th className="pb-3 pl-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F8F9FD] text-[13px]">
            {items.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50/60 transition-colors">
                                <td className="py-4 pr-4">
                  <button
                    onClick={() => toggleCheck(sectionKey, row.id)}
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-all cursor-pointer ${
                      row.checked
                        ? 'bg-[#605BFF] border-[#605BFF] text-white'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                  >
                    {row.checked && <Check className="w-3 h-3 stroke-[3]" />}
                  </button>
                </td>

                                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <ToolIcon type={row.icon} />
                    <span className="font-semibold text-[#3B82F6] hover:underline cursor-pointer">
                      {row.title}
                    </span>
                  </div>
                </td>

                                <td className="py-4 px-4 text-[#8E95A9] whitespace-nowrap">
                  {row.startDate}
                </td>

                                <td className="py-4 px-4 text-[#EF4444] font-medium whitespace-nowrap">
                  {row.endDate}
                </td>

                                <td className="py-4 px-4 text-[#8E95A9] whitespace-nowrap">
                  {row.member}
                </td>

                                <td className="py-4 px-4 text-center whitespace-nowrap">
                  <span
                    className={`inline-block py-1.5 px-5 rounded-full text-[12px] font-semibold shadow-2xs ${
                      row.status === 'Running'
                        ? 'bg-[#4D88FF] text-white'
                        : row.status === 'Done'
                        ? 'bg-[#28A745] text-white'
                        : 'bg-[#FFF4EB] text-[#F2994A]'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>

                                <td className="py-4 pl-4 text-right whitespace-nowrap">
                  <div className="inline-flex items-center justify-end gap-2">
                    <button
                      onClick={() => alert(`Edit ${row.title}`)}
                      className="p-1 rounded text-[#3B82F6] hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(sectionKey, row.id)}
                      className="p-1 rounded text-[#EF4444] hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {renderSection('To Do', 'todo', sections.todo)}
      {renderSection('Doing', 'doing', sections.doing)}
      {renderSection('Done', 'done', sections.done)}
    </div>
  )
}
