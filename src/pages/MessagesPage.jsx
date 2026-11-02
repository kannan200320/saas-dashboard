import React, { useState } from 'react'
import {
  Plus,
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Send,
  ChevronLeft
} from 'lucide-react'
import avatar1 from '../assets/images/avatar-1.png'
import avatar2 from '../assets/images/avatar-2.png'
import avatar3 from '../assets/images/avatar-3.png'
import avatar4 from '../assets/images/avatar-4.png'
import avatar5 from '../assets/images/avatar-5.png'
import avatar6 from '../assets/images/avatar-6.png'
import avatar7 from '../assets/images/avatar-7.png'
import avatar8 from '../assets/images/avatar-8.png'
import chatAttach1 from '../assets/images/chat-attach-1.png'
import chatAttach2 from '../assets/images/chat-attach-2.png'

export const MessagesPage = () => {
  const [activeTab, setActiveTab] = useState('Personal')
  const [selectedChatId, setSelectedChatId] = useState('chat-3')
  const [showMobileChat, setShowMobileChat] = useState(false)
  const [messageInput, setMessageInput] = useState('')

  const conversations = [
    {
      id: 'chat-1',
      name: 'Shelby Goode',
      time: '1 min ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar3,
      online: true
    },
    {
      id: 'chat-2',
      name: 'Robert Bacins',
      time: '9 min ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar1,
      online: true
    },
    {
      id: 'chat-3',
      name: 'John Carilo',
      displayName: 'John Carlio',
      time: '15 min ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar4,
      online: true
    },
    {
      id: 'chat-4',
      name: 'Adriene Watson',
      time: '21 min ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar3,
      online: true
    },
    {
      id: 'chat-5',
      name: 'Jhon Deo',
      time: '29 min ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar2,
      online: true
    },
    {
      id: 'chat-6',
      name: 'Mark Ruffalo',
      time: '45 min ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar5,
      online: true
    },
    {
      id: 'chat-7',
      name: 'Bethany Jackson',
      time: '1h ago',
      lastMessage: 'Lorem Ipsum is simply dummy text of the printing',
      avatar: avatar3,
      online: true
    }
  ]

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Carlio',
      avatar: avatar4,
      showAvatar: false,
      type: 'text',
      content: 'Lorem Ipsum is simply'
    },
    {
      id: 2,
      sender: 'John Carlio',
      avatar: avatar4,
      showAvatar: false,
      type: 'text',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      time: '09:02 PM'
    },
    {
      id: 3,
      sender: 'John Carlio',
      avatar: avatar4,
      showAvatar: true,
      type: 'attachments',
      images: [chatAttach1, chatAttach2]
    },
    {
      id: 4,
      sender: 'John Carlio',
      avatar: avatar4,
      showAvatar: false,
      type: 'text',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      time: '09:04 PM'
    },
    {
      id: 5,
      sender: 'John Carlio',
      avatar: avatar4,
      showAvatar: true,
      type: 'empty'
    }
  ])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'You',
        isMe: true,
        type: 'text',
        content: messageInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ])
    setMessageInput('')
  }

  const activeConversation =
    conversations.find((c) => c.id === selectedChatId) || conversations[2]

  return (
    <div className="bg-white rounded-3xl border border-[#F2F4F8] shadow-xs overflow-hidden flex flex-col lg:flex-row h-[calc(100dvh-120px)] min-h-[520px] lg:h-[calc(100vh-140px)] lg:min-h-[580px]">
      <div className={`w-full lg:w-[320px] xl:w-[340px] border-r border-[#F0F1F6] flex-col shrink-0 ${showMobileChat ? 'hidden lg:flex' : 'flex'}`}>
                <div className="p-5 pb-3 flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-[#1A1D2F]">Message</h2>
          <button
            onClick={() => alert('New message conversation')}
            className="w-7 h-7 rounded-full bg-[#605BFF] text-white flex items-center justify-center hover:bg-[#504BE8] transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

                <div className="px-5 pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-3 pr-8 py-2 bg-[#F8F9FD] border border-[#E9EDF5] rounded-xl text-[12px] text-[#1A1D2F] placeholder-[#9AA0AC] focus:outline-none focus:bg-white focus:border-[#605BFF] transition-all"
            />
            <Search className="w-3.5 h-3.5 text-[#9AA0AC] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

                <div className="flex items-center justify-around border-b border-gray-100 text-[13px] font-semibold">
          {['All', 'Personal', 'Teams'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2.5 px-3 relative transition-colors ${
                activeTab === tab
                  ? 'text-[#605BFF]'
                  : 'text-[#8E95A9] hover:text-[#1A1D2F]'
              }`}
            >
              <span>{tab}</span>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#605BFF] rounded-full" />
              )}
            </button>
          ))}
        </div>

                <div className="flex-1 overflow-y-auto no-scrollbar divide-y divide-gray-50/50">
          {conversations.map((c) => {
            const isSelected = selectedChatId === c.id
            return (
              <div
                key={c.id}
                onClick={() => {
                  setSelectedChatId(c.id)
                  setShowMobileChat(true)
                }}
                className={`flex items-start gap-3 p-4 cursor-pointer transition-colors ${
                  isSelected ? 'bg-[#F4F6FE]' : 'hover:bg-gray-50/70'
                }`}
              >
                                <div className="relative shrink-0">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {c.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
                  )}
                </div>

                                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-[13px] font-semibold text-[#1A1D2F] truncate">
                      {c.name}
                    </h4>
                    <span className="text-[10px] text-[#8E95A9] whitespace-nowrap">
                      {c.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#8E95A9] truncate leading-tight">
                    {c.lastMessage}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className={`flex-1 flex flex-col bg-white ${!showMobileChat ? 'hidden lg:flex' : 'flex'}`}>
                <div className="p-4 px-6 border-b border-[#F0F1F6] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowMobileChat(false)}
              className="lg:hidden p-1.5 -ml-2 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
              title="Back to conversations"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="relative">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-[#1A1D2F] leading-tight">
                {activeConversation.displayName || activeConversation.name}
              </h3>
              <span className="text-[11px] text-[#8E95A9]">Online</span>
            </div>
          </div>

                    <div className="flex items-center gap-2 text-gray-400">
            <button
              onClick={() => alert('Starting audio call...')}
              className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => alert('Starting video call...')}
              className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              <Video className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

                <div className="flex-1 p-6 overflow-y-auto no-scrollbar space-y-5 bg-[#FAFAFD]/40">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${
                m.isMe ? 'justify-end' : 'justify-start'
              }`}
            >
                            {!m.isMe && (
                <div className="w-7 h-7 shrink-0 mt-1">
                  {m.showAvatar && (
                    <div className="w-7 h-7 rounded-full overflow-hidden">
                      <img
                        src={m.avatar}
                        alt={m.sender}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

                            <div
                className={`max-w-2xl space-y-1.5 ${
                  m.isMe ? 'items-end' : 'items-start'
                }`}
              >
                                {m.type === 'text' && (
                  <div className="flex items-center gap-2 group">
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-2xs ${
                        m.isMe
                          ? 'bg-[#605BFF] text-white rounded-br-xs'
                          : 'bg-[#4D88FF] text-white rounded-tl-xs'
                      }`}
                    >
                      <p>{m.content}</p>
                      {m.time && (
                        <span className="text-[10px] text-white/80 block text-right mt-1">
                          {m.time}
                        </span>
                      )}
                    </div>
                    {!m.isMe && (
                      <button className="text-gray-300 hover:text-gray-500 transition-colors p-1 cursor-pointer">
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                                {m.type === 'attachments' && (
                  <div className="flex items-center gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      {m.images.map((img, i) => (
                        <div
                          key={i}
                          className="w-[160px] sm:w-[185px] md:w-[205px] rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all cursor-pointer bg-white shrink-0"
                        >
                          <img
                            src={img}
                            alt={`Attachment ${i + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 transition-colors p-1 cursor-pointer">
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                                {m.type === 'empty' && (
                  <div className="h-6" />
                )}
              </div>
            </div>
          ))}
        </div>

                <div className="p-4 px-6 border-t border-[#F0F1F6] bg-white">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-3 px-4 py-2 bg-[#F8F9FD] border border-[#E2E8F0] rounded-2xl focus-within:border-[#605BFF] focus-within:bg-white transition-all"
          >
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="flex-1 bg-transparent text-[13px] text-[#1A1D2F] placeholder-[#9AA0AC] focus:outline-none"
            />

            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Smile className="w-4 h-4" />
            </button>

            <button
              type="submit"
              className="p-1.5 rounded-xl text-[#605BFF] hover:bg-purple-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
