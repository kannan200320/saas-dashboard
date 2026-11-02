import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { peopleData } from '../../data/scheduleData'

export const PeopleList = ({ selectedPersonId, onSelectPerson }) => {
  const [query, setQuery] = useState('')

  const filteredPeople = peopleData.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.email.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-5 shadow-xs">
      <h4 className="text-[14px] font-bold text-[#1A1D2F] mb-3">People</h4>

            <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search for People"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-3 pr-8 py-2 bg-[#F8F9FB] border border-[#E9EDF5] rounded-xl text-[12px] text-[#1A1D2F] placeholder-[#9AA0AC] focus:outline-none focus:border-[#605BFF] focus:bg-white transition-all"
        />
        <Search className="w-3.5 h-3.5 text-[#9AA0AC] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

            <div className="space-y-3">
        {filteredPeople.map((person) => {
          const isSelected = selectedPersonId === person.id
          return (
            <div
              key={person.id}
              onClick={() => onSelectPerson && onSelectPerson(person.id)}
              className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-colors ${
                isSelected
                  ? 'bg-[#F2F3FE] ring-1 ring-[#605BFF]/20'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-[28px] h-[28px] rounded-full overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[13px] font-semibold text-[#1A1D2F] truncate leading-tight">
                  {person.name}
                </span>
                <span className="text-[11px] text-[#8E95A9] truncate leading-tight mt-0.5">
                  {person.email}
                </span>
              </div>
            </div>
          )
        })}

        {filteredPeople.length === 0 && (
          <p className="text-center text-[12px] text-gray-400 py-2">
            No people found.
          </p>
        )}
      </div>
    </div>
  )
}
