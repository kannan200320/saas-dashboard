import React from 'react'
import { Check, MoreHorizontal, MessageSquare, Heart, Plus } from 'lucide-react'

export const KanbanCard = ({ task, onToggleComplete }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-4 shadow-2xs hover:shadow-md transition-all duration-200 space-y-3 group">
            <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors shrink-0 ${
              task.completed
                ? 'bg-[#4D88FF] text-white'
                : 'border border-gray-300 hover:border-gray-400 bg-white'
            }`}
          >
            {task.completed && <Check className="w-2.5 h-2.5 stroke-[3]" />}
          </button>
          <h4 className="text-[13px] font-bold text-[#1A1D2F] truncate">
            {task.title}
          </h4>
        </div>

        <button className="text-gray-400 hover:text-gray-700 p-0.5 rounded transition-colors shrink-0">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

            {task.badges && task.badges.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          {task.badges.map((b, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold leading-none shadow-2xs ${b.color}`}
            >
              {b.text}
            </span>
          ))}
        </div>
      )}

            {task.description && (
        <p className="text-[12px] text-[#8E95A9] leading-relaxed line-clamp-2">
          {task.description}
        </p>
      )}

            {task.attachments && task.attachments.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {task.attachments.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100/80 h-[68px] flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity"
            >
              <img
                src={img}
                alt={`Attachment ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

            {task.attachment && (
        <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100/80 flex items-center justify-center max-h-[140px] cursor-pointer hover:opacity-95 transition-opacity">
          <img
            src={task.attachment}
            alt="Attachment preview"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

            <div className="flex items-center justify-between pt-1 border-t border-gray-50 text-[11px] text-[#8E95A9]">
                <div className="flex items-center -space-x-1.5">
          {task.avatars &&
            task.avatars.map((av, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full overflow-hidden ring-1.5 ring-white bg-gray-200 shrink-0"
              >
                <img src={av} alt="member" className="w-full h-full object-cover" />
              </div>
            ))}
          <div className="w-5 h-5 rounded-full bg-[#00C5FF] text-white flex items-center justify-center text-[10px] font-bold ring-1.5 ring-white shrink-0">
            <Plus className="w-3 h-3 stroke-[3]" />
          </div>
        </div>

                <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-[#B0B7C3]" />
            <span>{task.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#B0B7C3]" />
            <span>{task.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
